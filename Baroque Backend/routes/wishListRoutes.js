const wishController = require("../api/controllers/wishControllers");
const userMiddleware = require("../middlewares/userauth");
const express = require("express");
const router = express.Router();
router.post(
  "/addwishlist",
  userMiddleware.userauth,
  wishController.addWishlist,
);
router.get("/getwishlist", userMiddleware.userauth, wishController.getwishlish);
router.delete(
  "/removewishlist/:productId",
  userMiddleware.userauth,
  wishController.removeSingleWish,
);
router.delete(
  "/removeallwishlist",
  userMiddleware.userauth,
  wishController.removeAllWishlish,
);
router.post(
  "/addwishlisttocart",
  userMiddleware.userauth,
  wishController.addWishlistToCart,
);

module.exports = router;
