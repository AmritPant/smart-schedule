const dotenv = require("dotenv");
const mongoose = require("mongoose");

//   Confituring .envfile
dotenv.config();

const express = require("express");

const app = express();

//  Connecting to a Database
mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.txseqeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((e) => {
    console.log(`Database Connected Sucessfully ${e}`);
  })
  .catch(() => {
    console.error(`Some unexpected Error Occured`);
  });

app.get("/", (req, res) => {
  res.send("First API Request");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running on Port 3001");
});
