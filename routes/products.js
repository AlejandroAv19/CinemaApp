const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const products = require("../controllers/products");

router
  .route("/")
  .get(isLoggedIn, products.home)
  .post(isLoggedIn, products.create);

router
  .route("/:id")
  .get(isLoggedIn, products.show)
  .patch(isLoggedIn, products.update)
  .delete(isLoggedIn, products.delete);

router.get("/:id/edit", isLoggedIn, products.updateForm);

module.exports = router;
