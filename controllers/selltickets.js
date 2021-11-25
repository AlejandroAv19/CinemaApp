const Movie = require("../models/movie");
const Show = require("../models/show");
const TicketPurchase = require("../models/ticketPurchase");
const Sale = require("../models/sale");
const User = require("../models/user");

module.exports.home = async (req, res) => {
  const movies = await Movie.find({});
  const shows = await Show.find({});
  res.render("selltickets/home", { movies, shows: JSON.stringify(shows) });
};

module.exports.create = async (req, res) => {
  // MAKING THE TICKET PURCHASE
  const newTicketPurchase = new TicketPurchase(req.body);

  // MAKING THE SALE
  const user = await User.findOne({ username: req.cookies.username });
  const newSale = new Sale({
    details: newTicketPurchase,
    madeBy: user,
    type: "ticket",
    date: Date.now(),
    total: req.body.total,
  });

  // SUBSTRACT SEATS AVAILABLE
  const { auditorium, day, showtime, ticketsNumber } = req.body;
  const showFound = await Show.findOne({ auditorium, day, showtime });

  // IF THERE ARE AVAILABLE SEATS
  if (parseInt(ticketsNumber) <= parseInt(showFound.availableSeats)) {
    await newTicketPurchase.save();
    await newSale.save();
    const updateShow = await Show.findOneAndUpdate(
      { auditorium, day, showtime },
      {
        availableSeats:
          parseInt(showFound.availableSeats) - parseInt(ticketsNumber),
      }
    );
  }

  res.redirect("/home");
};

module.exports.show = async (req, res) => {
  const id = req.params.id;
  const purchase = await TicketPurchase.findById(id);
  res.render("selltickets/show", { purchase });
};
