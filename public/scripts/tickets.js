const addMovie = (movieTitle) => {
  const overviewMovie = document.querySelector("#overview_movie");
  overviewMovie.innerHTML = movieTitle;
};

const addAuditorium = (auditoriumNumber) => {
  const overviewAuditorium = document.querySelector("#overview_auditorium");
  overviewAuditorium.innerHTML = auditoriumNumber;
};

const addSeats = () => {
  const seats = document.querySelector("#seats_number").value;
  const overviewSeats = document.querySelector("#overview_number_seats");
  overviewSeats.innerHTML = seats;
  // Changing the total
  const overviewTotal = document.querySelector("#overview_total");
  overviewTotal.innerHTML = "$" + (parseInt(seats) * 9.16).toString();
};

const sendInfo = () => {
  // GETTING THE MOVIE NAME
  const overview_movie = document.querySelector("#overview_movie").innerHTML;
  const form_movie = document.querySelector("#from_movie");
  form_movie.value = overview_movie;
  // GETTING THE AUDITORIUM
  const overview_auditorium = document.querySelector(
    "#overview_auditorium"
  ).innerHTML;
  const form_auditorium = document.querySelector("#form_auditorium");
  form_auditorium.value = overview_auditorium;
  // GETTING THE SEATS
  const overview_seats = document.querySelector(
    "#overview_number_seats"
  ).innerHTML;
  const form_seats = document.querySelector("#form_seats");
  form_seats.value = overview_seats;
  // GETTING THE TOTAL
  const overview_total = document
    .querySelector("#overview_total")
    .innerHTML.substring(1);
  const form_total = document.querySelector("#form_total");
  form_total.value = overview_total;
};
