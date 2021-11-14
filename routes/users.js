const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

// CONTROLLERS
const users = require("../controllers/users");

// ROUTES
router.route("/").get(users.index).post(users.create);

router.get("/new", users.newForm);

router.route("/:id").get(users.show).patch(users.update).delete(users.delete);

router.get("/:id/edit", users.updateForm);

module.exports = router;
