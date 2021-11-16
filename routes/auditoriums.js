const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const auditoriums = require("../controllers/auditoriums");

router
  .route("/")
  .get(isLoggedIn, auditoriums.home)
  .post(isLoggedIn, auditoriums.create);

router
  .route("/:id")
  .get(isLoggedIn, auditoriums.show)
  .patch(isLoggedIn, auditoriums.update)
  .delete(isLoggedIn, auditoriums.delete);

router.get("/:id/edit", isLoggedIn, auditoriums.updateForm);

module.exports = router;
