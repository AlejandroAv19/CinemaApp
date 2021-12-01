const setProvider = (providerName) => {
  const providerForm = document.querySelector("#provider");
  providerForm.value = providerName;
};

const showModal = (product) => {
  const productObject = JSON.parse(product);
  const rowBody = document.querySelector("#rowBody");
  console.log(rowBody.hasChildNodes());

  if (!rowBody.hasChildNodes()) {
    const tdID = document.createElement("td");
    tdID.innerHTML = productObject.productId;
    rowBody.appendChild(tdID);

    const tdName = document.createElement("td");
    tdName.innerHTML = productObject.name;
    rowBody.appendChild(tdName);

    const tdPPU = document.createElement("td");
    tdPPU.innerHTML = productObject.pricePerUnit;
    rowBody.appendChild(tdPPU);

    const tdStockLimit = document.createElement("td");
    tdStockLimit.innerHTML = productObject.stockLimit;
    rowBody.appendChild(tdStockLimit);

    const tdAvailableStock = document.createElement("td");
    tdAvailableStock.innerHTML = productObject.stock;
    rowBody.appendChild(tdAvailableStock);

    const tdDescription = document.createElement("td");
    tdDescription.innerHTML = productObject.description;
    rowBody.appendChild(tdDescription);
  } else {
    while (rowBody.firstChild) rowBody.removeChild(rowBody.firstChild);
    const tdID = document.createElement("td");
    tdID.innerHTML = productObject.productId;
    rowBody.appendChild(tdID);

    const tdName = document.createElement("td");
    tdName.innerHTML = productObject.name;
    rowBody.appendChild(tdName);

    const tdPPU = document.createElement("td");
    tdPPU.innerHTML = productObject.pricePerUnit;
    rowBody.appendChild(tdPPU);

    const tdStockLimit = document.createElement("td");
    tdStockLimit.innerHTML = productObject.stockLimit;
    rowBody.appendChild(tdStockLimit);

    const tdAvailableStock = document.createElement("td");
    tdAvailableStock.innerHTML = productObject.stock;
    rowBody.appendChild(tdAvailableStock);

    const tdDescription = document.createElement("td");
    tdDescription.innerHTML = productObject.description;
    rowBody.appendChild(tdDescription);
  }
};

const updateModal = (product) => {
  const productObject = JSON.parse(product);
  //---------------------------------------------------------
  const updateForm = document.querySelector("#update_form");
  updateForm.action = `/products/${productObject._id}?_method=PATCH`;
  //---------------------------------------------------------
  const update_name_form = document.querySelector("#update_name");
  update_name_form.value = productObject.name;

  const update_price_form = document.querySelector("#update_price");
  update_price_form.value = productObject.pricePerUnit;

  const update_stock_limit_form = document.querySelector("#update_stockLimit");
  update_stock_limit_form.value = productObject.stockLimit;

  const update_description_form = document.querySelector("#update_description");
  update_description_form.value = productObject.description;
};

const deleteModal = (product) => {
  const productObject = JSON.parse(product);
  const deleteForm = document.querySelector("#delete_form");
  deleteForm.action = `/products/${productObject._id}?_method=DELETE`;
};
