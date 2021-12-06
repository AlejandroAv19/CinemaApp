const Movie = require("../models/movie");
const Show = require("../models/show");
const TicketPurchase = require("../models/ticketPurchase");
const Sale = require("../models/sale");
const User = require("../models/user");
const SaleInvoice = require("../models/sale_invoice_counter");

module.exports.home = async (req, res) => {
  const movies = await Movie.find({});
  const shows = await Show.find({});
  const invoiceCounter = await SaleInvoice.find({});
  // ---
  const a = JSON.stringify(invoiceCounter);
  const b = JSON.parse(a);
  // ---
  const nextInvoice = parseInt(b[0].seq_value) + 1;

  res.render("selltickets/home", {
    movies,
    shows: JSON.stringify(shows),
    nextInvoice,
  });
};

module.exports.create = async (req, res) => {
  const { movie, auditorium, day, showtime, ticketsNumber, date } = req.body;

  const newTicketPurchase = new TicketPurchase({
    movie,
    auditorium,
    day,
    showtime,
    ticketsNumber,
  });

  // MAKING THE SALE
  const user = await User.findOne({ username: req.cookies.username });
  const newSale = new Sale({
    details: newTicketPurchase,
    madeBy: user,
    type: "ticket",
    onModel: "TicketPurchase",
    date,
  });

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
