const Product = require("../models/product");
const Provider = require("../models/provider");
const ProductOrder = require("../models/productOrder");
const sale = require("../models/sale");
const User = require("../models/user");

module.exports.home = async (req, res) => {
  const products = await Product.find({});
  const providers = await Provider.find({});
  res.render("products/home", { products, providers });
};

module.exports.create = async (req, res) => {
  // RETRIEVING THE INFORMATION FROM THE FORM
  const { name, pricePerUnit, stockLimit, description, provider } = req.body;
  // CREATING AND SAVING THE PRODUCT
  const newProduct = new Product({
    name,
    pricePerUnit,
    stockLimit,
    stock: 0,
    description,
  });
  await newProduct.save();
  // FINDING THE PROVIDER
  const providerFound = await Provider.findOne({ name: provider });
  // ADDING THE NEW PRODUCT
  providerFound.products.push(newProduct);
  await providerFound.save();
  // REDIRECTING
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
