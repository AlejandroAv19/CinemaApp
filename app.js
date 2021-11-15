const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user");

const { dbConnection } = require("./config/dbConection");

dotenv.config();
const app = express();

// ESPRESS SET & USE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(session(sessionConfig))
app.use(session({ secret: "SuperSecret" }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// DB CONNECTION
dbConnection();

// ROUTES
/*
app.get("/fakeUser", async (req, res) => {
  const newUser = new User({
    name: "Pepe Pecas",
    hireDate: "Date",
    userType: "employee",
    username: "user1",
  });
  const user = await User.register(newUser, "password1");
  res.send(user);
});
*/

app.get("/", (req, res) => {
  res.render("users/login");
});

app.get("/home", (req, res) => {
  res.render("home");
});

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// MISC ROUTES
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
