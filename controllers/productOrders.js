const Product = require("../models/product");
const ProductOrder = require("../models/productOrder");
const sale = require("../models/sale");
const User = require("../models/user");

module.exports.home = async (req, res) => {
  const products = await Product.find({});
  res.render("productorders/home", { products });
};

module.exports.create = async (req, res) => {
  // -- PRODUCT ORDER
  // FINDING THE PRODUCT
  const productName = req.body.product;
  const { quantity, pricePerUnit, subtotal, providersCut, total } = req.body;
  const product = await Product.findOne({ name: productName });
  // CREATING THE PRODUCT ORDER
  const productOrder = new ProductOrder({
    product,
    quantity,
    pricePerUnit,
    subtotal,
    providersCut,
    total,
  });

  // -- SALE
  const user = await User.findOne({ username: req.cookies.username });
  const newSale = new sale({
    details: productOrder,
    madeBy: user,
    type: "productOrder",
    date: Date.now(),
    total,
  });

  // ADDING THE PRODUCT TO THE STOCK
  const actualStock = product.stock;
  const newStock = parseInt(actualStock) + parseInt(quantity);

  // IF THE NEW STOCK DOESNT GET ABOVE THE LIMIT
  if (newStock <= parseInt(product.stockLimit)) {
    const productUpdate = await Product.findOneAndUpdate(
      { name: productName },
      { stock: newStock }
    );
    await newSale.save();
    await productOrder.save();
  }

  // REDIRECT
  res.redirect("/home");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const order = await ProductOrder.findById(id).populate("product");
  res.render("productOrders/show", { order });
};
