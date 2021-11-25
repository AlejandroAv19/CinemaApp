// PRODUCT SELECTION
const addProduct = (productName, pricePerUnit) => {
  const productOverview = document.querySelector("#product_overview");
  const pricePerUnitOverview = document.querySelector(
    "#price_per_unit_overview"
  );
  productOverview.innerHTML = productName;
  pricePerUnitOverview.innerHTML = pricePerUnit;
};

// ADD QUANTITY BUTTON
const addQuantity = document.querySelector("#add_quantity_button");
addQuantity.addEventListener("click", function () {
  const numberDisplay = document.querySelector("#product_quantity");
  numberDisplay.value = parseInt(numberDisplay.value) + 1;
});

// SUBSTRACT QUANTITY BUTTON
const substractQuantity = document.querySelector("#substract_quantity_button");
substractQuantity.addEventListener("click", function () {
  const numberDisplay = document.querySelector("#product_quantity");
  if (numberDisplay.value != "1") {
    numberDisplay.value = parseInt(numberDisplay.value) - 1;
  }
});

// CONFIRM QUANTITY
const confirmQuantityButton = document.querySelector(
  "#confirm_quantity_button"
);
confirmQuantityButton.addEventListener("click", function () {
  // ADD QUANTITY TO OVERVIEW
  const quantity = document.querySelector("#product_quantity").value;
  const quantityOverview = document.querySelector("#quantity_overview");
  quantityOverview.innerHTML = quantity;
  // SUBTOTAL
  const pricePerUnit = document.querySelector(
    "#price_per_unit_overview"
  ).innerHTML;
  const subtotalOverview = document.querySelector("#subtotal_overview");
  subtotalOverview.innerHTML = parseInt(quantity) * parseInt(pricePerUnit);
  // PROVIDERS CUT
  const providersPercentage = 0.15;
  const providersCut =
    parseInt(subtotalOverview.innerHTML) * providersPercentage;
  const providersCutOverview = document.querySelector("#provider_cut_overview");
  providersCutOverview.innerHTML = providersCut;
  // TOTAL
  const total =
    parseFloat(subtotalOverview.innerHTML) +
    parseFloat(providersCutOverview.innerHTML);
  const totalOverview = document.querySelector("#total_overview");
  totalOverview.innerHTML = total;
});

// CONFIRM PURCHASE
const purchaseButton = document.querySelector("#confirm_purchase_button");
purchaseButton.addEventListener("click", function () {
  // PRODUCT NAME
  const productName = document.querySelector("#product_overview").innerHTML;
  const productForm = document.querySelector("#product_form");
  productForm.value = productName;
  //QUANTITY
  const quantity = document.querySelector("#quantity_overview").innerHTML;
  const quantityForm = document.querySelector("#quantity_form");
  quantityForm.value = quantity;
  // PRICE PER UNIT
  const pricePerUnit = document.querySelector(
    "#price_per_unit_overview"
  ).innerHTML;
  const PPUForm = document.querySelector("#price_per_unit_form");
  PPUForm.value = pricePerUnit;
  // SUBTOTAL
  const subtotal = document.querySelector("#subtotal_overview").innerHTML;
  const subtotalForm = document.querySelector("#subtotal_form");
  subtotalForm.value = subtotal;
  // PROVIDERS CUT
  const providersCut = document.querySelector(
    "#provider_cut_overview"
  ).innerHTML;
  const providersCutForm = document.querySelector("#providers_cut_form");
  providersCutForm.value = providersCut;
  // TOTAL
  const total = document.querySelector("#total_overview").innerHTML;
  const totalForm = document.querySelector("#total_form");
  totalForm.value = total;
});
