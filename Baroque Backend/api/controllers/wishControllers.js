const wishlistModel = require("../models/wishlistModel");
const cartModel = require("../models/cartModel");

module.exports = {

  addWishlist: async function (req, res) {
    try {
      let wish = await wishlistModel.findOne({
        user: req.user._id,
      });

      if (!wish) {
        wish = await wishlistModel.create({
          user: req.user._id,
          products: [],
        });
      }

      const existingProduct = wish.products.find(
        (product) => product.productId === String(req.body.productId)
      );

      if (existingProduct) {
        return res.json({
          status: "error",
          message: "Product already wishlist mein hai",
        });
      }

      wish.products.push({
        productId: String(req.body.productId),
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        image: req.body.image,
      });

      await wish.save();

      return res.json({
        status: "success",
        wishlist: wish,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },


  getwishlish: async function (req, res) {
    try {
      const wish = await wishlistModel.findOne({
        user: req.user._id,
      });

      if (!wish) {
        return res.json({
          status: "success",
          wish: { products: [] },
        });
      }

      return res.json({
        status: "success",
        wish: wish,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },


  removeSingleWish: async function (req, res) {
    try {
      await wishlistModel.findOneAndUpdate(
        { user: req.user._id },
        {
          $pull: {
            products: {
              _id: req.params.productId,
            },
          },
        }
      );

      return res.json({
        status: "success",
        message: "Product wishlist se remove ho gaya",
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },

 
  removeAllWishlish: async function (req, res) {
    try {
      await wishlistModel.findOneAndUpdate(
        { user: req.user._id },
        { products: [] }
      );

      return res.json({
        status: "success",
        message: "Wishlist empty kar di",
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },


 addWishlistToCart: async function (req, res) {
  try {
    const wish = await wishlistModel.findOne({ user: req.user._id });

    if (!wish || wish.products.length === 0) {
      return res.json({ status: "error", message: "Wishlist khaali hai" });
    }

    let cart = await cartModel.findOne({ user: req.user._id });

    if (!cart) {
      cart = await cartModel.create({ user: req.user._id, products: [] });
    }

    wish.products.forEach((product) => {
      const existProduct = cart.products.find(
        (pro) => pro.productId === product.productId
      );

      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        cart.products.push({
          productId: product.productId,
          name: product.name,
          price: product.price,
          type: product.type,
          image: product.image,
          quantity: 1,
        });
      }
    });

    await cart.save();

    wish.products = [];
    await wish.save();

    return res.json({ status: "success", cart: cart });
  } catch (err) {
    return res.json({ status: "error", message: err.message });
  }
},
};