const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "PREMIUM" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("products", productSchema);