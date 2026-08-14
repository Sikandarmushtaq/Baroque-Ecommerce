const adminModel = require("../models/adminModel");
const orderModel = require("../models/orderModel");
const contactModel = require("../models/contactModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  createAdmin: async function (req, res) {
    try {
      const adminCount = await adminModel.countDocuments(); // y line ai sey li hai

      if (adminCount > 0) {
        return res.json({ status: "error", message: "Admin nibn skta" });
      }
      let admin = await adminModel.create({
        email: req.body.email,
        password: req.body.password,
      });
      const token = jwt.sign({ id: admin._id }, process.env.ADMIN_SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.json({ status: "sucess", token: token });
    } catch (err) {
      return res.json({ status: "eror", message: err.message });
    }
  },

  authenticate: async function (req, res) {
    try {
      const admin = await adminModel.findOne({
        email: req.body.email,
      });

      if (!admin) {
        return res.json({
          status: "not found",
          message: "email is not authorized",
        });
      }

      const pasMatch = await bcrypt.compare(req.body.password, admin.password);

      if (pasMatch) {
        const token = jwt.sign(
          { id: admin._id },
          process.env.ADMIN_SECRET_KEY,
          {
            expiresIn: "1h",
          },
        );

        res.json({
          status: "Found",
          message: "admin Authorized",
          token: token,
        });
      } else {
        res.json({
          status: "Not Found",
          message: "admin not authorized",
        });
      }
    } catch (err) {
      res.send(err.message);
    }
  },
  getOrders: async function (req, res) {
    try {
      const orders = await orderModel.find();
      if (!orders) {
        return res.json({ status: "failed", message: "order ni mily" });
      } else {
        return res.json({ status: "found", orders: orders });
      }
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },
  getContact: async function (req, res) {
    try {
      const contact = await contactModel.find();
      if (!contact) {
        return res.json({ status: "failed", message: "message ni mila" });
      } else {
        return res.json({ status: "found", contact: contact });
      }
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },
  updateOrderStatus: async function (req, res) {
    try {
      const orderId = req.params.orderId;

      const order = await orderModel.findById(orderId);

      if (!order) {
        return res.json({ status: "error", message: "Order nahi mila" });
      }

      order.status = req.body.status;

      await order.save();

      return res.json({
        status: "success",
        message: "Order status update ho gaya",
        order: order,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },
};
