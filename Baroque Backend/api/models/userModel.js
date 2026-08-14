const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
mongoose.pluralize(null);

let userSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    otp: { type: String },
    otpExpiresAt: { type: Date },
    addresses: [
      {
        firstName: { type: String },
        lastName: { type: String },
        country: { type: String, default: "Pakistan" },
        address: { type: String },
        apartment: { type: String },
        city: { type: String },
        postalCode: { type: String },
        phone: { type: String },
        isDefault: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

module.exports = mongoose.model("users", userSchema);