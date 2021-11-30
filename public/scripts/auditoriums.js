const showModal = (auditorium) => {
  const auditoriumObject = JSON.parse(auditorium);
  const rowBody = document.querySelector("#rowBody");
  console.log(rowBody.hasChildNodes());

  if (!rowBody.hasChildNodes()) {
    const tdID = document.createElement("td");
    tdID.innerHTML = auditoriumObject._id;
    rowBody.appendChild(tdID);

    const tdNumber = document.createElement("td");
    tdNumber.innerHTML = auditoriumObject.number;
    rowBody.appendChild(tdNumber);

    const tdCapacity = document.createElement("td");
    tdCapacity.innerHTML = auditoriumObject.capacity;
    rowBody.appendChild(tdCapacity);

    const tdProyectionType = document.createElement("td");
    tdProyectionType.innerHTML = auditoriumObject.proyectionType;
    rowBody.appendChild(tdProyectionType);
  } else {
    while (rowBody.firstChild) rowBody.removeChild(rowBody.firstChild);
    const tdID = document.createElement("td");
    tdID.innerHTML = auditoriumObject._id;
    rowBody.appendChild(tdID);

    const tdNumber = document.createElement("td");
    tdNumber.innerHTML = auditoriumObject.number;
    rowBody.appendChild(tdNumber);

    const tdCapacity = document.createElement("td");
    tdCapacity.innerHTML = auditoriumObject.capacity;
    rowBody.appendChild(tdCapacity);

    const tdProyectionType = document.createElement("td");
    tdProyectionType.innerHTML = auditoriumObject.proyectionType;
    rowBody.appendChild(tdProyectionType);
  }
};

const updateModal = (auditorium) => {
  const auditoriumObject = JSON.parse(auditorium);
  //---------------------------------------------------------
  const updateForm = document.querySelector("#update_form");
  updateForm.action = `/auditoriums/${auditoriumObject._id}?_method=PATCH`;
  //---------------------------------------------------------
  const update_number_form = document.querySelector("#update_number");
  update_number_form.value = auditoriumObject.number;

  const update_capacity_form = document.querySelector("#update_capacity");
  update_capacity_form.value = auditoriumObject.capacity;

  const update_proyection_type_form = document.querySelector(
    "#update_proyectionType"
  );
  update_proyection_type_form.value = auditoriumObject.proyectionType;
};

const deleteModal = (auditorium) => {
  const auditoriumObject = JSON.parse(auditorium);

  const deleteForm = document.querySelector("#delete_form");
  deleteForm.action = `/auditoriums/${auditoriumObject._id}?_method=DELETE`;
};
