const addProduct = (name, price) => {
  const nameReplace = name.replaceAll(" ", "_");
  const table = document.querySelector(".overview_table_body");
  // PRIMER ELEMENTO
  if (!table.hasChildNodes()) {
    // PRIMER ELEMENTO
    // CREANDO ELEMENTOS
    const row = document.createElement("tr");
    row.id = nameReplace;
    let td_product_name = document.createElement("td");
    let td_quantity = document.createElement("td");
    td_quantity.id = nameReplace + "_quantity";
    let td_subtotal = document.createElement("td");
    td_subtotal.id = nameReplace + "_subtotal";
    // LLENANDO LA INFORMACION
    td_product_name.innerHTML = name;
    if (td_quantity.innerHTML === "") {
      td_quantity.innerHTML = 1;
    } else {
      td_quantity.innerHTML = parseInt(td_quantity.innerHTML) + 1;
    }
    td_subtotal.innerHTML = parseInt(td_quantity.innerHTML) * parseInt(price);
    // APPENDING THE ELEMENTS
    row.appendChild(td_product_name);
    row.appendChild(td_quantity);
    row.appendChild(td_subtotal);
    table.appendChild(row);
    // ADDING TO TOTAL
    let totalDisplay = document.querySelector("#total");
    totalDisplay.innerHTML = parseInt(totalDisplay.innerHTML) + parseInt(price);
  } else {
    // SI LA FILA YA EXISTE
    if (document.querySelector(`#${nameReplace}`)) {
      let selectedQuantity = document.querySelector(`#${nameReplace}_quantity`);
      selectedQuantity.innerHTML = parseInt(selectedQuantity.innerHTML) + 1;
      let selectedSubtotal = document.querySelector(`#${nameReplace}_subtotal`);
      selectedSubtotal.innerHTML = parseInt(selectedQuantity.innerHTML) * price;
      // ADDING TO TOTAL
      let totalDisplay = document.querySelector("#total");
      totalDisplay.innerHTML =
        parseInt(totalDisplay.innerHTML) + parseInt(price);
    } else {
      // SI NO EXISTE SE CREA
      const row = document.createElement("tr");
      row.id = nameReplace;
      let td_product_name = document.createElement("td");
      let td_quantity = document.createElement("td");
      td_quantity.id = nameReplace + "_quantity";
      let td_subtotal = document.createElement("td");
      td_subtotal.id = nameReplace + "_subtotal";
      // LLENANDO LA INFORMACION
      td_product_name.innerHTML = name;
      if (td_quantity.innerHTML === "") {
        td_quantity.innerHTML = 1;
      } else {
        td_quantity.innerHTML = parseInt(td_quantity.innerHTML) + 1;
      }
      td_subtotal.innerHTML = parseInt(td_quantity.innerHTML) * parseInt(price);
      // APPENDING THE ELEMENTS
      row.appendChild(td_product_name);
      row.appendChild(td_quantity);
      row.appendChild(td_subtotal);
      table.appendChild(row);
      // ADDING TO TOTAL
      let totalDisplay = document.querySelector("#total");
      totalDisplay.innerHTML =
        parseInt(totalDisplay.innerHTML) + parseInt(price);
    }
  }
};

const removeProduct = (name, price) => {
  const nameReplace = name.replaceAll(" ", "_");
  let productRow = document.querySelector(`#${nameReplace}`);
  if (productRow) {
    let selectedQuantity = document.querySelector(`#${nameReplace}_quantity`);
    let selectedSubtotal = document.querySelector(`#${nameReplace}_subtotal`);
    selectedQuantity.innerHTML = parseInt(selectedQuantity.innerHTML) - 1;
    selectedSubtotal.innerHTML =
      parseInt(selectedQuantity.innerHTML) * parseInt(price);
    // SUBSTRACTING TO TOTAL
    let totalDisplay = document.querySelector("#total");
    totalDisplay.innerHTML = parseInt(totalDisplay.innerHTML) - parseInt(price);
    if (selectedQuantity.innerHTML == 0) {
      productRow.remove();
    }
  }
};

const purchase = () => {
  // TARGETING THE OVERVIEW TABLE
  let overviewTable = document.querySelector(".overview_table_body");
  // FOR EVERY ITEM IN THE OVERVIEW
  for (item of overviewTable.childNodes) {
    const item_name = item.childNodes[0].innerHTML;
    const item_quantity = item.childNodes[1].innerHTML;
    const item_subtotal = item.childNodes[2].innerHTML;

    // CREATING THE ELEMENTS
    const i1 = document.createElement("input");
    const i2 = document.createElement("input");
    const i3 = document.createElement("input");

    //SETTING THE TYPE
    i1.type = "text";
    i2.type = "number";
    i3.type = "number";

    // SETTING THE NAME
    i1.name = "name";
    i2.name = "quantity";
    i3.name = "subtotal";

    // SETTING THE VALUE
    i1.value = item_name;
    i2.value = item_quantity;
    i3.value = item_subtotal;

    // HIDDENT THE ELEMENTS
    i1.hidden = true;
    i2.hidden = true;
    i3.hidden = true;

    //APPENDING THE ELEMENTS
    let purchaseForm = document.querySelector("#form_purchase");
    purchaseForm.appendChild(i1);
    purchaseForm.appendChild(i2);
    purchaseForm.appendChild(i3);
  }
  // RETRIEVING THE TOTAL
  const total = document.querySelector("#total").innerHTML;
  let i4 = document.createElement("input");
  i4.type = "number";
  i4.name = "total";
  i4.value = total;
  i4.hidden = true;
  let purchaseForm = document.querySelector("#form_purchase");
  purchaseForm.appendChild(i4);
};
