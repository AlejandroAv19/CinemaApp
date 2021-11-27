const addMovie = (movieName) => {
  const movieOverview = document.querySelector("#body_movie");
  movieOverview.innerHTML = movieName;
};

const addAuditorium = (auditoriumName, auditoriumSeats) => {
  const auditoriumOverview = document.querySelector("#body_auditorium");
  auditoriumOverview.innerHTML = auditoriumName;
  // AVAILABLE SEATS
  const seatsOverview = document.querySelector("#body_seats");
  seatsOverview.innerHTML = auditoriumSeats;
};

// SHOWTIME DAY
const confirmShowtimeDayButton = document.querySelector("#confirmShowtimeDay");

confirmShowtimeDayButton.addEventListener("click", function () {
  const day = document.querySelector("#day");
  console.dir(day);
});

// SHOWTIME WEEK
const confirmShowtimeWeekButton = document.querySelector(
  "#confirmShowtimeWeek"
);

confirmShowtimeWeekButton.addEventListener("click", function () {
  const week = document.querySelector("#week");
  console.dir(week);
  console.log(week.value);
  const date = new Date(week.value);
  console.log(date);
});

/*
const addDate = () => {
  const calendarDay = document.querySelector("#day");
  const dayOverview = document.querySelector("#body_day");
  dayOverview.innerHTML = calendarDay.value;
};

const addShowtime = () => {
  const showtimeInput = document.querySelector("#showtime");
  const showtimeOverview = document.querySelector("#body_showtime");
  showtimeOverview.innerHTML = showtimeInput.value;
};

const createShow = () => {
  // RETRIEVING THE FORM
  const form = document.querySelector("#create_form");

  // RETRIEVING THE INFORMATION
  // MOVIE NAME
  const movieOverview = document.querySelector("#body_movie").innerHTML;
  const movie = document.createElement("input");
  movie.type = "text";
  movie.name = "movie";
  movie.value = movieOverview;
  movie.hidden = true;
  form.appendChild(movie);

  // AUDITORIUM
  const auditoriumOverview =
    document.querySelector("#body_auditorium").innerHTML;
  const auditorium = document.createElement("input");
  auditorium.type = "text";
  auditorium.name = "auditorium";
  auditorium.value = auditoriumOverview;
  auditorium.hidden = true;
  form.appendChild(auditorium);

  // DAY
  const dayOverview = document.querySelector("#body_day").innerHTML;
  const day = document.createElement("input");
  day.type = "text";
  day.name = "day";
  day.value = dayOverview;
  day.hidden = true;
  form.appendChild(day);

  // SHOWTIME
  const showtimeBody = document.querySelector("#body_showtime").innerHTML;
  const showtime = document.createElement("input");
  showtime.type = "text";
  showtime.name = "showtime";
  showtime.value = showtimeBody;
  showtime.hidden = true;
  form.appendChild(showtime);

  //SEATS
  const seatsOverview = document.querySelector("#body_seats").innerHTML;
  const seats = document.createElement("input");
  seats.type = "number";
  seats.name = "availableSeats";
  seats.value = seatsOverview;
  seats.hidden = true;
  form.appendChild(seats);
};
*/
