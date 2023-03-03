const express = require("express");
const router = express.Router();

const checkToken = require("../middleware/checkToken");

router.get("/", (req, res) => {
  res.status(200).json({
    degree: 23,
    type: "F",
    status: "rainy | sunny | normal",
  });
});

module.exports = router;
