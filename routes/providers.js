const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const { isLoggedIn } = require("../config/middleware");
router.use(methodOverride("_method"));
router.use(express.urlencoded({ extended: true }));

const providers = require("../controllers/providers");

router
  .route("/")
  .get(isLoggedIn, providers.home)
  .post(isLoggedIn, providers.create);

router
  .route("/:id")
  .get(isLoggedIn, providers.show)
  .patch(isLoggedIn, providers.update)
  .delete(isLoggedIn, providers.delete);

router.get("/:id/edit", isLoggedIn, providers.updateForm);

module.exports = router;
