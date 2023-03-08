const userRoute = require("./user");
const postRouter = require("./post");
const roomRouter = require("./room");
const deviceRouter = require("./device");
const wheatherRouter = require("./wheather")

function run(app) {
  app.use("/api/auth", userRoute);
  app.use("/api/posts", postRouter);
  app.use("/api/rooms", roomRouter);
  app.use("/api/device", deviceRouter);
  app.use("/api/wheather", wheatherRouter);
  app.get("/", (req, res, next) => {
    res.send("WECOME TO API");
  });
}

module.exports = run;
