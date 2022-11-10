const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const app = express();
//CORS Policy configuration
app.use(cors());

//Use Express
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AD API SERVICE RUNNING");
});

module.exports = app;
