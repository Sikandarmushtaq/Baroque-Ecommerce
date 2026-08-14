const express = require("express");
const router = express.Router();
const cartController = require("../api/controllers/cartController");
const userMiddleware = require("../middlewares/userauth");


router.post("/addcart", userMiddleware.userauth, cartController.addToCart);
router.get("/getcart", userMiddleware.userauth, cartController.getCart);
router.put(
  "/updatecart/:productId",
  userMiddleware.userauth,
  cartController.updateCart,
);
router.delete(
  "/removecart/:productId",
  userMiddleware.userauth,
  cartController.removeFromCart,
);
router.post("/mergecart", userMiddleware.userauth, cartController.mergeCart);

module.exports = router;
