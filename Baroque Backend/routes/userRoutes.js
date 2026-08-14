const userController = require("../api/controllers/userControllers");
const userMiddlware = require("../middlewares/userauth");

const express = require("express");
const router = express.Router();

router.post("/login", userController.sendOtp);
router.post("/verifyotp", userController.verifyOtp);
router.post("/loginwithpassword", userController.loginWithPassword);

router.get("/profile", userMiddlware.userauth, userController.getProfile);
router.put(
  "/updateprofile",
  userMiddlware.userauth,
  userController.updateProfile,
);
router.put(
  "/setpassword",
  userMiddlware.userauth,
  userController.setPassword,
);

router.post("/addaddress", userMiddlware.userauth, userController.addAddress);
router.get(
  "/getaddresses",
  userMiddlware.userauth,
  userController.getAddresses,
);
router.put(
  "/updateaddress/:addressId",
  userMiddlware.userauth,
  userController.updateAddress,
);
router.delete(
  "/deleteaddress/:addressId",
  userMiddlware.userauth,
  userController.deleteAddress,
);

module.exports = router;