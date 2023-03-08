const express = require("express");
const router = express.Router();

const checkToken = require("../middleware/checkToken");

const wheather = {
  temperature: 1,
  humidity: 1,
  outSky: "rainy",
}

router.get("/", (req, res) => {
  return res.status(200).json(wheather);
});

router.post("/change", (req,res) => {
  const {outSky} = req.body

  wheather.outSky = outSky

  global._io.emit("change_wheather", wheather)

  return res.status(200).json("success")


})

module.exports = router;
