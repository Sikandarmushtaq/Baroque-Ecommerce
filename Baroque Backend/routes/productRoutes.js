const express = require("express");
const router = express.Router();

const productController = require("../api/controllers/productController");
const adminMiddleware = require("../middlewares/adminauth");
const upload = require("../middlewares/multer");


router.post(
  "/addproduct",
  adminMiddleware,
  upload.single("image"),
  productController.addProduct,
);

router.put(
  "/updateproduct/:productId",
  adminMiddleware,
  upload.single("image"),
  productController.updateProduct,
);

router.delete(
  "/deleteproduct/:productId",
  adminMiddleware,
  productController.deleteProduct,
);


router.get("/getallproducts", productController.getAllProducts);
router.get("/getsingleproduct/:productId", productController.getSingleProduct);

module.exports = router;