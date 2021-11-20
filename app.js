// IMPORTS
const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const localStrategy = require("passport-local");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");

// MODEL
const User = require("./models/user");
const Ticket = require("./models/ticket");
const Movie = require("./models/movie");
const Auditorium = require("./models/auditorium");

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

app.get("/home", isLoggedIn, (req, res) => {
  res.render("home");
});

// SALES

app.get("/sales", isLoggedIn, (req, res) => {
  res.render("sales/home");
});

app.get("/sales/tickets", isLoggedIn, async (req, res) => {
  const movies = await Movie.find();
  const auditoriums = await Auditorium.find();
  res.render("sales/tickets", { movies, auditoriums });
});

app.post("/sales/tickets", isLoggedIn, async (req, res) => {
  const { movie, auditorium, seats, price } = req.body;
  const movieFound = await Movie.findOne({ title: movie });
  const auditoriumFound = await Auditorium.findOne({ number: auditorium });
  const ticket = new Ticket({
    movie: movieFound,
    auditorium: auditoriumFound,
    date: Date.now(),
    seats,
    total: price,
  });
  await ticket.save();
  res.redirect("/sales");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
