const showModal = (movie) => {
  const movieObject = JSON.parse(movie);
  const rowBody = document.querySelector("#rowBody");
  console.log(rowBody.hasChildNodes());

  if (!rowBody.hasChildNodes()) {
    const tdID = document.createElement("td");
    tdID.innerHTML = movieObject._id;
    rowBody.appendChild(tdID);

    const tdTitle = document.createElement("td");
    tdTitle.innerHTML = movieObject.title;
    rowBody.appendChild(tdTitle);

    const tdYear = document.createElement("td");
    tdYear.innerHTML = movieObject.year;
    rowBody.appendChild(tdYear);

    const tdSinopsis = document.createElement("td");
    tdSinopsis.innerHTML = movieObject.sinopsis;
    rowBody.appendChild(tdSinopsis);

    const tdRating = document.createElement("td");
    tdRating.innerHTML = movieObject.rating;
    rowBody.appendChild(tdRating);

    const tdLanguage = document.createElement("td");
    tdLanguage.innerHTML = movieObject.language;
    rowBody.appendChild(tdLanguage);

    const tdDuration = document.createElement("td");
    tdDuration.innerHTML = movieObject.duration;
    rowBody.appendChild(tdDuration);
  } else {
    while (rowBody.firstChild) rowBody.removeChild(rowBody.firstChild);
    const tdID = document.createElement("td");
    tdID.innerHTML = movieObject._id;
    rowBody.appendChild(tdID);

    const tdTitle = document.createElement("td");
    tdTitle.innerHTML = movieObject.title;
    rowBody.appendChild(tdTitle);

    const tdYear = document.createElement("td");
    tdYear.innerHTML = movieObject.year;
    rowBody.appendChild(tdYear);

    const tdSinopsis = document.createElement("td");
    tdSinopsis.innerHTML = movieObject.sinopsis;
    rowBody.appendChild(tdSinopsis);

    const tdRating = document.createElement("td");
    tdRating.innerHTML = movieObject.rating;
    rowBody.appendChild(tdRating);

    const tdLanguage = document.createElement("td");
    tdLanguage.innerHTML = movieObject.language;
    rowBody.appendChild(tdLanguage);

    const tdDuration = document.createElement("td");
    tdDuration.innerHTML = movieObject.duration;
    rowBody.appendChild(tdDuration);
  }
};

const updateModal = (movie) => {
  const movieObject = JSON.parse(movie);
  //---------------------------------------------------------
  const updateForm = document.querySelector("#update_form");
  updateForm.action = `/movies/${movieObject._id}?_method=PATCH`;
  //---------------------------------------------------------
  const update_tile_form = document.querySelector("#update_title");
  update_tile_form.value = movieObject.title;

  const update_year_form = document.querySelector("#update_year");
  update_year_form.value = movieObject.year;

  const update_sinopsis_form = document.querySelector("#update_sinopsis");
  update_sinopsis_form.value = movieObject.sinopsis;

  const update_rating_form = document.querySelector("#update_rating");
  update_rating_form.value = movieObject.rating;

  const update_language_form = document.querySelector("#update_language");
  update_language_form.value = movieObject.language;

  const update_duration_form = document.querySelector("#update_duration");
  update_duration_form.value = movieObject.duration;
};

const deleteModal = (movie) => {
  const movieObject = JSON.parse(movie);
  const deleteForm = document.querySelector("#delete_form");
  deleteForm.action = `/movies/${movieObject._id}?_method=DELETE`;
};
