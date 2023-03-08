const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController");
const checkToken = require("../middleware/checkToken");

router.post("/change-device-status", roomController.changeStatusDevice);

module.exports = router;
