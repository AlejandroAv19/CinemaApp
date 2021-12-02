const Sale = require("../models/sale");
const Order = require("../models/order");
const Product = require("../models/product");
module.exports.home = async (req, res) => {
  const sales = await Sale.find({}).populate("madeBy").populate("details");
  const orders = await Order.find({}).populate("madeBy").populate("details");
  const products = await Product.find({});
  res.render("sales/home", { sales, orders, products });
};
