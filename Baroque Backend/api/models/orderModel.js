const mongoose = require("mongoose");
mongoose.pluralize(null);

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
 products: [
  {
    name: { type: String },
    price: { type: Number },
    type: { type: String },
    productId: { type: String },
    image: { type: String },
    quantity: { type: Number },
  },
],
    totalPrice: { type: Number, required: true },
    shippingAddress: {
      firstName: { type: String },
      lastName: { type: String },
      country: { type: String, default: "Pakistan" },
      address: { type: String },
      apartment: { type: String },
      city: { type: String },
      postalCode: { type: String },
      phone: { type: String },
    },
 paymentMethod: {
  type: String,
  enum: ["safepay"],
  default: "safepay",
},

safepayTracker: {
  type: String,
},
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    
  },
  { timestamps: true },
);

module.exports = mongoose.model("orders", orderSchema);
