const mongoose = require("mongoose");
module.exports.dbConnection = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k8zct.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => {
      console.log("error", e);
    });
};
