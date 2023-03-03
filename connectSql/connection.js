require("dotenv").config();
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://newuser:I50nvjVytBNmryO0@cluster0.gkzod.mongodb.net/smarthome?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log("success");
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

module.exports = { connect };
