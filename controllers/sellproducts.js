const Product = require("../models/product");
const ProductPurchase = require("../models/productPurchase");
const Sale = require("../models/sale");
const User = require("../models/user");

module.exports.home = async (req, res) => {
  const products = await Product.find({});
  res.render("sellproducts/home", { products });
};

module.exports.create = async (req, res) => {
  // RETRIEVING THE INFORMATION FROM THE PURCHASE
  const { name, quantity, subtotal } = req.body;
  // RETRIEVING LENGHT TO CHECK IF IT IS AN ARRAY OR NOT | HOW MANY TIMES WE NEED TO ITERATE
  const length = name.length;
  // CREATING OUR PURCHASE
  const purchase = new ProductPurchase({});
  // IF THERE IS ONLY ONE ELEMENT
  if (typeof name === "string") {
    // FIND THE PRODUCT
    const item = await Product.findOne({ name });
    // PUSH THE ELEMENT TO THE ELEMENTS ARRAY OF THE PURCHASE
    purchase.items.push({ item, quantity, subtotal });
    // SAVE THE DOCUMENT
    await purchase.save();
  } else {
    // IF THERE IS MORE THAN ONE ELEMENT
    for (let i = 0; i < length; i++) {
      // FINDING THE PRODUCT
      const item = await Product.findOne({ name: name[i] });
      // PUSHING THE ITEMS TO THE ARRAY IN PURCHASE
      purchase.items.push({
        item,
        quantity: quantity[i],
        subtotal: subtotal[i],
      });
    }

    // ONCE FINISHED PUSHEN SAVE THE DOCUMENT
    await purchase.save();

    //SALE CREATION
    // SEARCH USER
    const user = await User.findOne({ username: req.cookies.username });
    const total = req.body.total;
    const sale = new Sale({
      details: purchase,
      madeBy: user,
      type: "product",
      date: Date.now(),
      total,
    });
    await sale.save();
  }
  res.redirect("/home");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const purchase = await ProductPurchase.findById(id).populate({
    path: "items",
    populate: {
      path: "item",
      model: "Product",
    },
  });
  res.render("sellproducts/show", { purchase });
};
