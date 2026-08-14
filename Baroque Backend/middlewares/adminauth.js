const jwt = require("jsonwebtoken");
const adminModel = require("../api/models/adminModel");

module.exports = async function (req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.json({ status: "error", message: "Token nahi hai" });
    }
    const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY);
    const admin = await adminModel.findById(decoded.id);
    if (!admin) {
      return res.json({ status: "error", message: "Admin nahi mila" });
    }
    req.admin = admin;
    next();
  } catch (err) {
    return res.json({ status: "error", message: "Token invalid hai" });
  }
};
