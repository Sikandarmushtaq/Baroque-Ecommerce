const mongoose = require("mongoose");
mongoose.pluralize(null);

const contactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("contacts", contactSchema);
