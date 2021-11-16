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
router.get("/home", users.home);

router.route("/").get(users.index).post(users.create);

router.get("/new", isLoggedIn, users.newForm);

router.route("/:id").get(users.show).patch(users.update).delete(users.delete);

router.get("/:id/edit", users.updateForm);

router
  .route("/login")
  .get(users.loginForm)
  .post(passport.authenticate("local", { failureRedirect: "/" }), users.login);

module.exports = router;
