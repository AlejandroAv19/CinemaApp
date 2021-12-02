const mongoose = require("mongoose");
const { db } = require("../models/product");
// mongodb://localhost:27017/test
module.exports.dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k8zct.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    )
    .then((db) => {
      console.log("Database Connected");
      return db;
    })
    .catch((e) => {
      console.log("error", e);
    });
  return db;
};
