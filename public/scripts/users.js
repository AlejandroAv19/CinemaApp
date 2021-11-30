const showModal = (user) => {
  const userObject = JSON.parse(user);
  const rowBody = document.querySelector("#rowBody");
  console.log(rowBody.hasChildNodes());

  if (!rowBody.hasChildNodes()) {
    const tdID = document.createElement("td");
    tdID.innerHTML = userObject._id;
    rowBody.appendChild(tdID);

    const tdName = document.createElement("td");
    tdName.innerHTML = userObject.name;
    rowBody.appendChild(tdName);

    const tdUserType = document.createElement("td");
    tdUserType.innerHTML = userObject.userType;
    rowBody.appendChild(tdUserType);

    const tdUsername = document.createElement("td");
    tdUsername.innerHTML = userObject.username;
    rowBody.appendChild(tdUsername);
  } else {
    while (rowBody.firstChild) rowBody.removeChild(rowBody.firstChild);
    const tdID = document.createElement("td");
    tdID.innerHTML = userObject._id;
    rowBody.appendChild(tdID);

    const tdName = document.createElement("td");
    tdName.innerHTML = userObject.name;
    rowBody.appendChild(tdName);

    const tdUserType = document.createElement("td");
    tdUserType.innerHTML = userObject.userType;
    rowBody.appendChild(tdUserType);

    const tdUsername = document.createElement("td");
    tdUsername.innerHTML = userObject.username;
    rowBody.appendChild(tdUsername);
  }
};

const updateModal = (user) => {
  const userObject = JSON.parse(user);
  //---------------------------------------------------------
  const updateForm = document.querySelector("#update_form");
  updateForm.action = `/users/${userObject._id}?_method=PATCH`;
  //---------------------------------------------------------
  const update_name_form = document.querySelector("#update_name");
  update_name_form.value = userObject.name;

  const update_hireDate_form = document.querySelector("#update_hireDate");
  update_hireDate_form.value = userObject.hireDate;

  const update_userType_form = document.querySelector("#update_userType");
  update_userType_form.value = userObject.userType;

  const update_username_form = document.querySelector("#update_username");
  update_username_form.value = userObject.username;
};

const deleteModal = (user) => {
  const userObject = JSON.parse(user);

  const deleteForm = document.querySelector("#delete_form");
  deleteForm.action = `/users/${userObject._id}?_method=DELETE`;
};
