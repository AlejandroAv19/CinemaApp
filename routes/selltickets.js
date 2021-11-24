const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const selltickets = require("../controllers/selltickets");

router
  .route("/")
  .get(isLoggedIn, selltickets.home)
  .post(isLoggedIn, selltickets.create);

router.route("/:id").get(isLoggedIn, selltickets.show);

module.exports = router;
