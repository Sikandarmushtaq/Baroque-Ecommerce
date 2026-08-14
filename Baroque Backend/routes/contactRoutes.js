const express = require("express");
const router = express.Router();
const contactController = require("../api/controllers/contactController");

router.post("/createcontact", contactController.createContact);

module.exports = router;
