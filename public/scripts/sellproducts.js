const addProduct = () => {
  const table = document.querySelector("#overview_table_body");
  const row = document.createElement("tr");
  // RETRIEVING THE INFORMATION
  // PRODUCT NAME
  const selectionName = document.querySelector(
    "#selection_product_name"
  ).innerHTML;
  const overviewName = document.querySelector("#overview_name");
  overviewName.innerHTML = selectionName;
  // QUANTITY
  const quantity = document.querySelector("#overview_quantity");
  if (quantity.innerHTML === "") {
    quantity.innerHTML = 1;
  } else {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
  }
  // SUBTOTAL
  const productPrice = parseInt(
    document.querySelector("#selection_product_price").innerHTML
  );
  const subtotal = document.querySelector("#overview_subtotal");
  subtotal.innerHTML = parseInt(quantity.innerHTML) * productPrice;

  // DEBBUG LOG
  console.log(selectionName);
};

const removeProduct = () => {};
