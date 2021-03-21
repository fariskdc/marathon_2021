const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

const subjectsRoute = require("./routes/subject");
app.use("/subjects", subjectsRoute);
const studentRoute = require("./routes/students");
app.use("/students", studentRoute);
const studentIndexRoute = require("./routes/student_index");
app.use("/students/:id/index", studentIndexRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

app.listen(port);
