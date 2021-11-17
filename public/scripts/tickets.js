const selectedMovie = document.querySelector(".movieSelect");
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
