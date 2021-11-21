const Sale = require("../models/sale");
module.exports.home = async (req, res) => {
  const sales = await Sale.find({}).populate("madeBy").populate("details");
  res.render("sales/home", { sales });
};
