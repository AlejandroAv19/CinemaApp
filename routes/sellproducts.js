const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const sellproducts = require("../controllers/sellproducts");

router.route("/").get(isLoggedIn, sellproducts.home).post(sellproducts.create);
router.route("/:id").get(isLoggedIn, sellproducts.show);

module.exports = router;
