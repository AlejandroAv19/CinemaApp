// CUSTOM ERROR
const CustomError = require("../config/CustomError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be signed in...");
    throw new CustomError(401, "Unauthorized");
  }
  next();
};
