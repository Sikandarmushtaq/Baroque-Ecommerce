const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
mongoose.pluralize(null);

const adminSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
  },
  { timestamps: true },
);
adminSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, saltRounds);
});

module.exports = mongoose.model("admins", adminSchema);
