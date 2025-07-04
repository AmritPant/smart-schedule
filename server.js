const dotenv = require("dotenv");
const mongoose = require("mongoose");

//   Configuring .envfile
dotenv.config();

//  Connecting to a Databasec
mongoose
  .connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.txseqeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((e) => {
    console.log(`Database Connected Sucessfully ${e}`);
  })
  .catch((e) => {
    console.log(e);
    console.error(`Some unexpected Error Occured`);
  });

// Seting up the server
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});
