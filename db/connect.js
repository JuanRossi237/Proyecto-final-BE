const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);
    console.log("database ON");
  } catch {
    console.log("error in database");
  }
};

module.exports = { connect };
