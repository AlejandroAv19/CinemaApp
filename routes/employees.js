const express = require("express");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

// CONTROLLERS
const employees = require("../controllers/employees");

// ROUTES
router.route("/").get(employees.index).post(employees.create);

router.get("/new", employees.newForm);

router
  .route("/:id")
  .get(employees.show)
  .patch(employees.update)
  .delete(employees.delete);

router.get("/:id/edit", employees.updateForm);

module.exports = router;
