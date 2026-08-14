const mongoose = require("mongoose");

mongoose.pluralize(null);

const wishlistSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    products: [
      {
        productId: {
          type: String,
        },

        name: {
          type: String,
        },

        price: {
          type: Number,
        },

        type: {
          type: String,
        },

        image: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("wishlists", wishlistSchema);
