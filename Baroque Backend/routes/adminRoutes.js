const express = require("express");
const router = express.Router();
const adminController = require("../api/controllers/adminController");
const adminMiddleware = require("../middlewares/adminauth");

router.post("/createadmin", adminController.createAdmin);
router.post("/adminlogin", adminController.authenticate);
router.get("/getadminorders", adminMiddleware, adminController.getOrders);
router.get("/getadmincontacts", adminMiddleware, adminController.getContact);
router.put(
  "/updateorderstatus/:orderId",
  adminMiddleware,
  adminController.updateOrderStatus,
);

module.exports = router;
