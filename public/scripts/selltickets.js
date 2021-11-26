const showsAndOverview = (movieTitle, shows) => {
  // SHOW SHOWS
  showsList = JSON.parse(shows);
  const table = document.querySelector("#shows_body");
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  for (show of showsList) {
    if (show.movie === movieTitle) {
      const row = document.createElement("tr");

      const auditoriumTable = document.createElement("td");
      auditoriumTable.innerHTML = show.auditorium;

      const dayTable = document.createElement("td");
      dayTable.innerHTML = show.day;

      const showtimeTable = document.createElement("td");
      showtimeTable.innerHTML = show.showtime;

      const seatsTable = document.createElement("td");
      seatsTable.innerHTML = show.availableSeats;

      const selectButton = document.createElement("button");
      selectButton.innerHTML = "Select";
      selectButton.className = "btn btn-primary";
      selectButton.addEventListener("click", function () {
        // AUDITORIUM
        const auditoriumOverview = document.querySelector(
          "#overview_auditorium"
        );
        auditoriumOverview.innerHTML = auditoriumTable.innerHTML;

        // DAY
        const dayOverview = document.querySelector("#overview_day");
        dayOverview.innerHTML = dayTable.innerHTML;

        //SHOWTIME
        const showtimeOverview = document.querySelector("#overview_showtime");
        showtimeOverview.innerHTML = showtimeTable.innerHTML;
      });

      row.appendChild(auditoriumTable);
      row.appendChild(dayTable);
      row.appendChild(showtimeTable);
      row.appendChild(seatsTable);
      row.appendChild(selectButton);
      table.appendChild(row);
    }
  }

  // ADD TO OVERVIEW
  const overviewMovieName = document.querySelector("#overview_movie");
  overviewMovieName.innerHTML = movieTitle;
};

// ---------------------------- NEW VERSION OF DOM MANIPULATION ----------------------------

// ADD TICKET BUTTON
const addTickets = document.querySelector("#add");
addTickets.addEventListener("click", function () {
  const numberDisplay = document.querySelector("#number_tickets");
  numberDisplay.value = parseInt(numberDisplay.value) + 1;
});

// SUBSTRACT TICKETS BUTTON
const substractTickets = document.querySelector("#substract");
substractTickets.addEventListener("click", function () {
  const numberDisplay = document.querySelector("#number_tickets");
  if (numberDisplay.value != "1") {
    numberDisplay.value = parseInt(numberDisplay.value) - 1;
  }
});

// CONFIRM TICKETS
const buttonConfirmTickets = document.querySelector("#confirm_number_tickets");
buttonConfirmTickets.addEventListener("click", function () {
  // ADDING N OF TICKETS TO THE OVERVIEW
  const numberDisplay = document.querySelector("#number_tickets");
  const ticketsOverview = document.querySelector("#overview_number_tickets");
  ticketsOverview.innerHTML = numberDisplay.value;

  // DISPLAYING THE TOTAL
  const totalOverview = document.querySelector("#overview_total");
  totalOverview.innerHTML = parseInt(ticketsOverview.innerHTML) * 9.16;
});

// CONFIRM PURCHASE
const buttonConfirmPurchase = document.querySelector("#confirm_purchase");
buttonConfirmPurchase.addEventListener("click", function () {
  // RETIEVING THE INFORMATION AND APPENDING TO THE FORM
  // MOVIE
  const movieOverview = document.querySelector("#overview_movie").innerHTML;
  const movieForm = document.querySelector("#movie_form");
  movieForm.value = movieOverview;
  // AUDITORIUM
  const auditoriumOverview = document.querySelector(
    "#overview_auditorium"
  ).innerHTML;
  const auditoriumForm = document.querySelector("#auditorium_form");
  auditoriumForm.value = auditoriumOverview;
  // DAY
  const dayOverview = document.querySelector("#overview_day").innerHTML;
  const dayForm = document.querySelector("#day_form");
  dayForm.value = dayOverview;
  // SHOWTIME
  const showtimeOverview =
    document.querySelector("#overview_showtime").innerHTML;
  const showtimeForm = document.querySelector("#showtime_form");
  showtimeForm.value = showtimeOverview;
  // TICKETS NUMBER
  const ticketsOverview = document.querySelector(
    "#overview_number_tickets"
  ).innerHTML;
  const ticketsForm = document.querySelector("#tickets_number_form");
  ticketsForm.value = ticketsOverview;
  // TOTAL
  const totalOverview = document.querySelector("#overview_total").innerHTML;
  const totalForm = document.querySelector("#total_form");
  totalForm.value = totalOverview;
});
