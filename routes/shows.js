const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const shows = require("../controllers/shows");

router.route("/").get(isLoggedIn, shows.home).post(isLoggedIn, shows.create);

module.exports = router;
