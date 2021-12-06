// REQUIRED MODELS
const Product = require("../models/product");
const ProductOrder = require("../models/productOrder");
const Order = require("../models/order");
const User = require("../models/user");
const OrderInvoice = require("../models/order_invoice_counter");

// HOME RENDER
module.exports.home = async (req, res) => {
  const products = await Product.find({});
  const invoiceCounter = await OrderInvoice.find({});
  // ---
  const a = JSON.stringify(invoiceCounter);
  const b = JSON.parse(a);
  // ---
  const nextInvoice = parseInt(b[0].seq_value) + 1;
  res.render("productorders/home", {
    products,
    nextInvoice,
  });
};

module.exports.create = async (req, res) => {
  const { _product, quantity, pricePerUnit, date } = req.body;
  if (!req.body._product) {
    console.log("NO PRODUCTS");
  } else {
    // NEW PRODUCT ORDER
    const productOrder = new ProductOrder({ date });

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
        productOrder.products.push(product);
        // ADDING THE PRODUCT TO THE STOCK
        // FINDING THE PRODUCT
        const addProduct = await Product.findOne({ name: _name });
        const actualStock = addProduct.stock;
        const newStock = parseInt(actualStock) + parseInt(_quantity);

        // IF THE NEW STOCK DOESNT GET ABOVE THE LIMIT
        if (newStock <= parseInt(addProduct.stockLimit)) {
          const productUpdate = await Product.findOneAndUpdate(
            { name: _name },
            { stock: newStock }
          );
          await productUpdate.save();
        }
      }

      await productOrder.save();
    } else {
      console.log("NOT ARRAY");
    }

    // FINDING THE USER
    const user = await User.findOne({ username: req.cookies.username });

    // CREATING THE ORDER
    const newOrder = new Order({
      details: productOrder,
      madeBy: user,
      date,
    });

    await newOrder.save();
  }
  res.redirect("/home");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const order = await ProductOrder.findById(id).populate("product");
  res.render("productOrders/show", { order });
};
