const express = require("express");
const router = express.Router();

const orderController = require("../api/controllers/orderController");
const userMiddleware = require("../middlewares/userauth");

router.post("/createorder", orderController.createOrder);

router.post("/verifypayment", orderController.verifyPayment);

router.get(
  "/getorders",
  userMiddleware.userauth,
  orderController.getUserOrders,
);

module.exports = router;
