const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const sqlConection = require("./connectSql/connection");
const matchRoute = require("./routes/index");

const SocketService = require("./module/SocketService");

const { Server } = require("socket.io");

const app = express();



const http = require("http");
const server = http.createServer(app);
const io = new Server(server);

sqlConection.connect();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
matchRoute(app);

const host = "0.0.0.0";
const port = process.env.PORT || 5000;

global._io = io;

global._io.on("connection", SocketService.connection);

server.listen(port, host, () => {
  console.log(`listening on port : ${port}`);
});
