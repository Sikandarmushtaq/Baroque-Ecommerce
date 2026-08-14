const contactModel = require("../models/contactModel");

module.exports = {
  createContact: async function (req, res) {
    try {
      await contactModel.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });
      return res.json({ status: "sucess", message: "contact hu gaya" });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },
};
