const addProduct = (name, price) => {
  const nameReplace = name.replace(" ", "_");
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
  } else {
    // SI LA FILA YA EXISTE
    if (document.querySelector(`#${nameReplace}`)) {
      let selectedQuantity = document.querySelector(`#${nameReplace}_quantity`);
      selectedQuantity.innerHTML = parseInt(selectedQuantity.innerHTML) + 1;
      let selectedSubtotal = document.querySelector(`#${nameReplace}_subtotal`);
      selectedSubtotal.innerHTML = parseInt(selectedQuantity.innerHTML) * price;
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
    }
  }
};

const removeProduct = (name, price) => {
  const nameReplace = name.replace(" ", "_");
  let productRow = document.querySelector(`#${nameReplace}`);
  if (productRow) {
    let selectedQuantity = document.querySelector(`#${nameReplace}_quantity`);
    let selectedSubtotal = document.querySelector(`#${nameReplace}_subtotal`);
    selectedQuantity.innerHTML = parseInt(selectedQuantity.innerHTML) - 1;
    selectedSubtotal.innerHTML =
      parseInt(selectedQuantity.innerHTML) * parseInt(price);
    if (selectedQuantity.innerHTML == 0) {
      productRow.remove();
    }
  }
};
