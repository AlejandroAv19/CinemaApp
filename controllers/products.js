const Product = require("../models/product");

module.exports.home = async (req, res) => {
  const products = await Product.find({});
  res.render("products/home", { products });
};

module.exports.create = async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect("/products");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render("products/show", { product });
};

module.exports.updateForm = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
};

module.exports.update = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndUpdate(id, req.body);
  res.redirect("/products");
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
};
