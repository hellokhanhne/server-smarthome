const express = require("express");
const router = express.Router();
const roomController = require("../controller/roomController");
const checkToken = require("../middleware/checkToken");

router.get("/", roomController.getRooms);
router.post("/change-people", roomController.changePeopleRoom)

module.exports = router;
