const productModel = require("../models/productModel");
const cloudinary = require("../../config/cloudinary");

module.exports = {


  addProduct: async function (req, res) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);

      const product = await productModel.create({
        name: req.body.name,
        price: req.body.price,
        image: result.secure_url,
      });

      return res.json({
        status: "success",
        message: "Product add ho gaya",
        product: product,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

  
  getAllProducts: async function (req, res) {
    try {
      const products = await productModel.find();

      return res.json({
        status: "success",
        products: products,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

 
  getSingleProduct: async function (req, res) {
    try {
      const product = await productModel.findById(req.params.productId);

      if (!product) {
        return res.json({ status: "error", message: "Product nahi mila" });
      }

      return res.json({
        status: "success",
        product: product,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },


  updateProduct: async function (req, res) {
    try {
      const product = await productModel.findById(req.params.productId);

      if (!product) {
        return res.json({ status: "error", message: "Product nahi mila" });
      }

      product.name = req.body.name;
      product.price = req.body.price;

   
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        product.image = result.secure_url;
      }

      await product.save();

      return res.json({
        status: "success",
        message: "Product update ho gaya",
        product: product,
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

 
  deleteProduct: async function (req, res) {
    try {
      await productModel.findByIdAndDelete(req.params.productId);

      return res.json({
        status: "success",
        message: "Product delete ho gaya",
      });
    } catch (err) {
      return res.json({ status: "error", message: err.message });
    }
  },

};