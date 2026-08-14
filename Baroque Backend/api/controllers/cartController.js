const cartModel = require("../models/cartModel");

module.exports = {
 
  addToCart: async function (req, res) {
    try {
      let cart = await cartModel.findOne({
        user: req.user._id,
      });

      if (!cart) {
        cart = await cartModel.create({
          user: req.user._id,
          products: [],
        });
      }

      const productId = String(req.body.productId);
      const quantity = Number(req.body.quantity) || 1;

      const existProduct = cart.products.find(
        (pro) => pro.productId === productId
      );

      if (existProduct) {
        existProduct.quantity += quantity;
      } else {
        cart.products.push({
          productId: productId,
          name: req.body.name,
          price: req.body.price,
          type: req.body.type,
          image: req.body.image,
          quantity: quantity,
        });
      }

      await cart.save();

      return res.json({
        status: "success",
        cart: cart,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },

 
  getCart: async function (req, res) {
    try {
      const cart = await cartModel.findOne({
        user: req.user._id,
      });

      if (!cart) {
        return res.json({
          status: "success",
          cart: {
            products: [],
          },
        });
      }

      return res.json({
        status: "success",
        cart: cart,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },


  updateCart: async function (req, res) {
    try {
      const cart = await cartModel.findOne({
        user: req.user._id,
      });

      if (!cart) {
        return res.json({
          status: "error",
          message: "Cart nahi hai",
        });
      }

      const product = cart.products.id(req.params.productId);

      if (!product) {
        return res.json({
          status: "error",
          message: "Product nahi mila",
        });
      }

      product.quantity = Number(req.body.quantity);

      await cart.save();

      return res.json({
        status: "success",
        cart: cart,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },


  removeFromCart: async function (req, res) {
    try {
      const cart = await cartModel.findOneAndUpdate(
        {
          user: req.user._id,
        },
        {
          $pull: {
            products: {
              _id: req.params.productId,
            },
          },
        },
        {
          new: true,
        }
      );

      return res.json({
        status: "success",
        cart: cart,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },

 
  mergeCart: async function (req, res) {
    try {
      const guestCart = req.body.localCart || [];

      let cart = await cartModel.findOne({
        user: req.user._id,
      });

      if (!cart) {
        cart = await cartModel.create({
          user: req.user._id,
          products: guestCart,
        });

        return res.json({
          status: "success",
          cart: cart,
        });
      }

      guestCart.forEach((localProduct) => {
        const existingProduct = cart.products.find(
          (product) =>
            product.productId === String(localProduct.productId)
        );

        if (existingProduct) {
          existingProduct.quantity += Number(localProduct.quantity);
        } else {
          cart.products.push({
            productId: String(localProduct.productId),
            name: localProduct.name,
            price: localProduct.price,
            type: localProduct.type,
            image: localProduct.image,
            quantity: Number(localProduct.quantity) || 1,
          });
        }
      });

      await cart.save();

      return res.json({
        status: "success",
        cart: cart,
      });
    } catch (err) {
      return res.json({
        status: "error",
        message: err.message,
      });
    }
  },
};