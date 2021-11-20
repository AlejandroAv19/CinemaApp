const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const sales = require("../controllers/sales");

router.route("/").get(isLoggedIn, sales.home);

module.exports = router;
