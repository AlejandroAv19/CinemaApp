const Product = require("../models/product");
module.exports.home = async (req, res) => {
  const products = await Product.find({});
  res.render("sellproducts/home", { products });
};
