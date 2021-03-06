// IMPORTS
const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const localStrategy = require("passport-local");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const ejsMate = require("ejs-mate");

// CUSTOM ERROR
const CustomError = require("./config/CustomError");

// MODEL
const User = require("./models/user");

// CONFIG
dotenv.config();
const app = express();

// ESPRESS SET & USE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "SuperSecret" }));
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MIDDLEWARE
const { isLoggedIn } = require("./config/middleware");

// DB CONNECTION
const { dbConnection } = require("./config/dbConection");
dbConnection();

// ROUTES
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const providerRoutes = require("./routes/providers");
app.use("/providers", providerRoutes);

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

const movieRoutes = require("./routes/movies");
app.use("/movies", movieRoutes);

const auditoriumRoutes = require("./routes/auditoriums");
app.use("/auditoriums", auditoriumRoutes);

const sellProductsRoutes = require("./routes/sellproducts");
app.use("/sellproducts", sellProductsRoutes);

const salesRoutes = require("./routes/sales");
app.use("/sales", salesRoutes);

const showRoutes = require("./routes/shows");
app.use("/shows", showRoutes);

const sellTicketsRoutes = require("./routes/selltickets");
app.use("/selltickets", sellTicketsRoutes);

const productOrdersRoutes = require("./routes/productorders");
app.use("/productorders", productOrdersRoutes);

// LOGIN FORM
app.get("/", (req, res) => {
  res.render("login");
});

// LOGIN LOGIC
app.post(
  "/",
  passport.authenticate("local", { failureRedirect: "/" }),
  (req, res) => {
    const userType = req.user.userType;
    const username = req.user.username;
    res.cookie("userType", userType);
    res.cookie("username", username);
    res.render("home", { userType });
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/home", isLoggedIn, (req, res) => {
  res.render("home", { userType: req.user.userType });
});

app.get("/error", (req, res) => {
  throw new CustomError(404, "Not Found");
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).render("error", { status, message });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
