const Product = require("../models/product");
const ProductPurchase = require("../models/productPurchase");
const Sale = require("../models/sale");
const User = require("../models/user");
const SaleInvoice = require("../models/sale_invoice_counter");

module.exports.home = async (req, res) => {
  const products = await Product.find({});
  const invoiceCounter = await SaleInvoice.find({});
  // ---
  const a = JSON.stringify(invoiceCounter);
  const b = JSON.parse(a);
  // ---
  const nextInvoice = parseInt(b[0].seq_value) + 1;

  res.render("sellproducts/home", { products, nextInvoice });
};

module.exports.create = async (req, res) => {
  const { _product, quantity, pricePerUnit, date } = req.body;
  if (!req.body._product) {
    console.log("NO PRODUCTS");
  } else {
    // NEW PRODUCT PURCHASE
    const productPurchase = new ProductPurchase();

    if (Array.isArray(_product)) {
      for (let i = 0; i < _product.length; i++) {
        const _name = _product[i];
        const _quantity = quantity[i];
        const _ppu = pricePerUnit[i];

        // SEARCHING FOR THE PRODUCT
        const productObject = await Product.findOne({ name: _name });

        // productId
        const a = JSON.stringify(productObject);
        const b = JSON.parse(a);

        const product = {
          product: productObject,
          productId: b.productId,
          quantity: _quantity,
          pricePerUnit: _ppu,
        };
        productPurchase.products.push(product);
        // SUBSTRACTING THE PRODUCT TO THE AVAILABLE STOCK
        // FINDING THE PRODUCT
        const addProduct = await Product.findOne({ name: _name });
        const actualStock = addProduct.stock;
        const newStock = parseInt(actualStock) - parseInt(_quantity);
        const productUpdate = await Product.findOneAndUpdate(
          { name: _name },
          { stock: newStock }
        );
        await productUpdate.save();
      }

      await productPurchase.save();
    } else {
      console.log("NOT ARRAY");
    }

    // FINDING THE USER
    const user = await User.findOne({ username: req.cookies.username });

    // CREATING THE ORDER
    const newSale = new Sale({
      details: productPurchase,
      madeBy: user,
      onModel: "ProductPurchase",
      type: "product",
      date,
    });
    await newSale.save();
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
