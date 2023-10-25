const express = require("express");
var cookieParser = require('cookie-parser');
var cors = require("cors");
const app = express();
const port = 3000;
const logger = require("morgan");

const apiRouter = require("./routes/api");

/* Librerías */
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());


app.use("/api", apiRouter);


const {connect} = require ("./db/connect")
connect ()


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 