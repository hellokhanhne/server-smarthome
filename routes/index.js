const userRoute = require("./user");
const postRouter = require("./post");
const roomRouter = require("./room");

function run(app) {
  app.use("/api/auth", userRoute);
  app.use("/api/posts", postRouter);
  app.use("/api/rooms", roomRouter);
  app.get("/", (req, res, next) => {
    res.send("WECOME TO API");
  });
}

module.exports = run;
