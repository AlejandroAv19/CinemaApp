const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const movies = require("../controllers/movies");

router.route("/").get(isLoggedIn, movies.home).post(isLoggedIn, movies.create);

router
  .route("/:id")
  .get(isLoggedIn, movies.show)
  .patch(isLoggedIn, movies.update)
  .delete(isLoggedIn, movies.delete);

router.get("/:id/edit", isLoggedIn, movies.updateForm);

module.exports = router;
