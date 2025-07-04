const dotenv = require("dotenv");

//   Confituring .envfile
dotenv.config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("First API Request");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running on Port 3001");
});
