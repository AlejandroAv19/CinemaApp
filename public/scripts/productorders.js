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
});

// ADD TO ORDER
const addToOrderButton = document.querySelector("#add_to_order_button");

// ADD THE PRODUCT TO THE ORDER
addToOrderButton.addEventListener("click", function () {
  const tableBody = document.querySelector("#order_table_body");
  const productNameID = document
    .querySelector("#product_overview")
    .innerHTML.replaceAll(" ", "_");

  const productName = document.querySelector("#product_overview");
  const quantity = document.querySelector("#quantity_overview");
  const PPU = document.querySelector("#price_per_unit_overview");
  const subtotal = document.querySelector("#subtotal_overview");

  // IF THE ROW IS ALREADY THERE
  const rowAvailable = document.querySelector(
    "#row_order_overview_" + productNameID
  );

  if (!rowAvailable) {
    const row = document.createElement("tr");
    row.id = "row_order_overview_" + productNameID;

    // PRODUCT NAME
    const productTD = document.createElement("td");
    productTD.innerHTML = productName.innerHTML;
    row.appendChild(productTD);

    // QUANTITY
    const quantityTD = document.createElement("td");
    quantityTD.innerHTML = quantity.innerHTML;
    row.appendChild(quantityTD);

    // PPU
    const PPUTD = document.createElement("td");
    PPUTD.innerHTML = PPU.innerHTML;
    row.appendChild(PPUTD);

    // SUBTOTAL
    const subtotalTD = document.createElement("td");
    subtotalTD.innerHTML = subtotal.innerHTML;
    row.appendChild(subtotalTD);

    tableBody.appendChild(row);

    // CLEANING THE OVERVIEW TABLE
    productName.innerHTML = "";
    quantity.innerHTML = "";
    PPU.innerHTML = "";
    subtotal.innerHTML = "";

    // ADD VALUES TO TOTALS
    // SUBTOTAL
    const totalsSubtotal = document.querySelector("#totals_subtotal");
    totalsSubtotal.innerHTML =
      parseFloat(totalsSubtotal.innerHTML) + parseFloat(subtotalTD.innerHTML);

    // PROVIDERS CUT
    const totalsProvidersCut = document.querySelector("#totals_providers_cut");
    const cut = (parseFloat(totalsSubtotal.innerHTML) * 0.1).toFixed(1);
    totalsProvidersCut.innerHTML = cut;

    // IVA
    const totalsIVA = document.querySelector("#totals_iva");
    const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
    totalsIVA.innerHTML = iva;

    // TOTAL
    const totalsTotal = document.querySelector("#totals_total");
    const total =
      parseFloat(totalsSubtotal.innerHTML) +
      parseFloat(totalsProvidersCut.innerHTML) +
      parseFloat(totalsIVA.innerHTML);
    totalsTotal.innerHTML = total.toFixed(1);
  } else {
    const productRow = document.querySelector(
      "#row_order_overview_" + productNameID
    );
    const rowChilds = productRow.childNodes;

    // QUANTITY
    const overviewQuantity =
      document.querySelector("#quantity_overview").innerHTML;
    const orderQuantity = rowChilds[1].innerHTML;
    rowChilds[1].innerHTML =
      parseInt(overviewQuantity) + parseInt(orderQuantity);

    // Subtotal
    const overviewSubtotal =
      document.querySelector("#subtotal_overview").innerHTML;
    const orderSubtotal = rowChilds[3].innerHTML;
    rowChilds[3].innerHTML =
      parseInt(overviewSubtotal) + parseInt(orderSubtotal);

    // CLEANING THE OVERVIEW TABLE
    productName.innerHTML = "";
    quantity.innerHTML = "";
    PPU.innerHTML = "";
    subtotal.innerHTML = "";

    // ADD VALUES TO TOTALS
    // SUBTOTAL
    const totalsSubtotal = document.querySelector("#totals_subtotal");
    totalsSubtotal.innerHTML = 0;
    const orderTable = document.querySelector("#order_table_body");
    const tableEl = orderTable.childNodes;
    for (el of tableEl) {
      const data = el.childNodes;
      totalsSubtotal.innerHTML =
        parseInt(totalsSubtotal.innerHTML) + parseInt(data[3].innerHTML);
    }
    // PROVIDERS CUT
    const totalsProvidersCut = document.querySelector("#totals_providers_cut");
    const cut = (parseInt(totalsSubtotal.innerHTML) * 0.1).toFixed(1);
    totalsProvidersCut.innerHTML = cut;

    // IVA
    const totalsIVA = document.querySelector("#totals_iva");
    const iva = (parseInt(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
    totalsIVA.innerHTML = iva;
  }
});

/*
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
*/
