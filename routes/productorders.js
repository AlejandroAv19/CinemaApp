const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const productOrders = require("../controllers/productOrders");

router
  .route("/")
  .get(isLoggedIn, productOrders.home)
  .post(isLoggedIn, productOrders.create);

router.route("/:id").get(isLoggedIn, productOrders.show);

module.exports = router;
