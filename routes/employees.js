const express = require("express");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

// CONTROLLERS
const employees = require("../controllers/employees");

// ROUTES
router.get("/", employees.index);
router.post("/", employees.create);
router.get("/new", employees.newForm);
router.get("/:id", employees.show);
router.get("/:id/edit", employees.updateForm);
router.patch("/:id", employees.update);
router.delete("/:id", employees.delete);

module.exports = router;
