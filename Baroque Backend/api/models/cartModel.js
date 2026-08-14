const mongoose = require("mongoose");

mongoose.pluralize(null);

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    products: [
      {
        productId: { type: String },
        name: { type: String },
        price: { type: Number },
        type: { type: String },
        image: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("carts", cartSchema);
