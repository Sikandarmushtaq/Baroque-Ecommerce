const userModel = require("../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  sendOtp: async function (req, res) {
    try {
      let user = await userModel.findOne({ email: req.body.email });

      if (!user) {
        user = await userModel.create({ email: req.body.email });
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      await userModel.findOneAndUpdate(
        { email: req.body.email },
        {
          otp: otp,
          otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
        },
      );

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL,
        to: req.body.email,
        subject: "OTP Code",
        text: `Your OTP is: ${otp}`,
      });

      return res.json({ status: "success", message: "OTP sent" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  verifyOtp: async function (req, res) {
    try {
      const user = await userModel.findOne({ email: req.body.email });

      if (!user) {
        return res.json({ status: "error", message: "User not found" });
      }

      if (req.body.otp !== user.otp) {
        return res.json({ status: "error", message: "Wrong OTP" });
      }

      if (user.otpExpiresAt < new Date()) {
        return res.json({ status: "error", message: "OTP expired" });
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      await userModel.findOneAndUpdate(
        { email: req.body.email },
        { otp: null, otpExpiresAt: null },
      );

      return res.json({ status: "success", token: token });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  loginWithPassword: async function (req, res) {
    try {
      let user = await userModel.findOne({ email: req.body.email });

      if (!user) {
        user = await userModel.create({
          email: req.body.email,
          password: req.body.password,
        });

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });

        return res.json({
          status: "success",
          message: "Account create ho gaya aur login ho gaya",
          token: token,
        });
      }

      if (!user.password) {
        user.password = req.body.password;
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });

        return res.json({
          status: "success",
          message: "Password set ho gaya aur login ho gaya",
          token: token,
        });
      }

      const passMatch = await bcrypt.compare(req.body.password, user.password);

      if (!passMatch) {
        return res.json({ status: "error", message: "Wrong password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.json({ status: "success", token: token });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  setPassword: async function (req, res) {
    try {
      const user = await userModel.findById(req.user._id);

      if (!user) {
        return res.json({ status: "error", message: "User nahi mila" });
      }

      user.password = req.body.password;
      await user.save();

      return res.json({ status: "success", message: "Password set ho gaya" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  getProfile: async function (req, res) {
    try {
      return res.json({
        status: "success",
        user: req.user,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  updateProfile: async function (req, res) {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        },
        { new: true },
      );

      return res.json({
        status: "success",
        message: "Profile update ho gayi",
        user: updatedUser,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  addAddress: async function (req, res) {
    try {
      await userModel.findByIdAndUpdate(req.user._id, {
        $push: {
          addresses: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            apartment: req.body.apartment,
            city: req.body.city,
            postalCode: req.body.postalCode,
            phone: req.body.phone,
            country: req.body.country,
            isDefault: req.body.isDefault,
          },
        },
      });
      return res.json({ status: "success", message: "Address add ho gaya" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  getAddresses: async function (req, res) {
    try {
      const user = await userModel.findById(req.user._id);
      return res.json({ status: "success", addresses: user.addresses });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  updateAddress: async function (req, res) {
    try {
      const addressId = req.params.addressId;

      const user = await userModel.findById(req.user._id);
      const address = user.addresses.id(addressId);

      address.firstName = req.body.firstName;
      address.lastName = req.body.lastName;
      address.address = req.body.address;
      address.apartment = req.body.apartment;
      address.city = req.body.city;
      address.postalCode = req.body.postalCode;
      address.phone = req.body.phone;
      address.country = req.body.country;
      address.isDefault = req.body.isDefault;

      await user.save();

      return res.json({ status: "success", message: "Address update ho gayi" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  deleteAddress: async function (req, res) {
    try {
      const addressId = req.params.addressId;

      await userModel.findByIdAndUpdate(req.user._id, {
        $pull: { addresses: { _id: addressId } },
      });

      return res.json({ status: "success", message: "Address delete ho gaya" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },
};