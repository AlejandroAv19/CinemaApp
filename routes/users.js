const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();
const passport = require("passport");

const { isLoggedIn } = require("../config/middleware");

router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

// CONTROLLER
const users = require("../controllers/users");

// ROUTES
router.route("/").get(isLoggedIn, users.home).post(isLoggedIn, users.create);

router
  .route("/:id")
  .get(isLoggedIn, users.show)
  .patch(isLoggedIn, users.update)
  .delete(isLoggedIn, users.delete);

router.get("/:id/edit", isLoggedIn, users.updateForm);

module.exports = router;
