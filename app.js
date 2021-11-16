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

// PASSPORT
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// DB CONNECTION
const { dbConnection } = require("./config/dbConection");
dbConnection();

// ROUTES
const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.render("users/login");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
