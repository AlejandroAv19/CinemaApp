const showOrderModal = (order, products) => {
  let ppu = "";
  // ORDER
  const parseObject = JSON.parse(order);
  const orderObject = parseObject.products;

  // PRODUCTS
  const parseProductsObject = JSON.parse(products);
  console.log(parseProductsObject);
  // PRODUCTS TABLE
  const productsTable = document.querySelector("#products_table_body");

  // CLEANING THE TABLE BEFORE SHOW
  while (productsTable.firstChild) {
    productsTable.removeChild(productsTable.firstChild);
  }

  // FOR EVERY PRODUCT IN THE ORDER
  for (_order of orderObject) {
    // ROW
    const row = document.createElement("tr");

    // PRODUCT ID COL
    const productIDCol = document.createElement("td");
    productIDCol.innerHTML = _order.productId;
    row.appendChild(productIDCol);

    // NAME, DESCRIPTION & PRICE PER UNIT
    for (product of parseProductsObject) {
      if (product._id == _order.product) {
        // NAME
        const nameCol = document.createElement("td");
        nameCol.innerHTML = product.name;
        row.appendChild(nameCol);
        // DESCRIPTION
        const descCol = document.createElement("td");
        descCol.innerHTML = product.description;
        row.appendChild(descCol);
        // PPU
        const ppuCol = document.createElement("td");
        ppuCol.innerHTML = product.pricePerUnit;
        row.appendChild(ppuCol);
        ppu = ppuCol;
      }
    }

    // QUANTITY
    const quantityCol = document.createElement("td");
    quantityCol.innerHTML = _order.quantity;
    row.appendChild(quantityCol);

    //PRICE
    const priceCol = document.createElement("td");
    priceCol.innerHTML =
      parseInt(quantityCol.innerHTML) * parseInt(ppu.innerHTML);
    row.appendChild(priceCol);

    productsTable.appendChild(row);
  }

  // TOTALS
  // SUBTOTAL
  const totalsSubtotal = document.querySelector("#totals_subtotal");
  totalsSubtotal.innerHTML = 0;
  const orderTable = document.querySelector("#products_table_body");
  const orderTableChilds = orderTable.childNodes;
  for (product of orderTableChilds) {
    const childs = product.childNodes;
    totalsSubtotal.innerHTML =
      parseInt(totalsSubtotal.innerHTML) + parseInt(childs[5].innerHTML);
  }

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
};

const searchOrderButton = () => {
  const searchInvoice = document.querySelector("#order_search").value;
  const ordersTable = document.querySelector("#orders_body");
  const tableChilds = ordersTable.childNodes;
  for (order of tableChilds) {
    if (order.tagName == "TR") {
      console.log(order);
      childs = order.childNodes;
      console.log(childs);
      if (childs[1].innerHTML == searchInvoice) {
        childs[7].children[0].click();
      }
    }
  }
};

//-----------------------------------------------
const showProductSaleModal = (sale, products) => {
  let ppu = "";
  // ORDER
  const parseObject = JSON.parse(sale);
  console.log(parseObject);
  /*
  const orderObject = parseObject.products;

  // PRODUCTS
  const parseProductsObject = JSON.parse(products);
  console.log(parseProductsObject);
  // PRODUCTS TABLE
  const productsTable = document.querySelector("#products_table_body");

  // CLEANING THE TABLE BEFORE SHOW
  while (productsTable.firstChild) {
    productsTable.removeChild(productsTable.firstChild);
  }

  // FOR EVERY PRODUCT IN THE ORDER
  for (_order of orderObject) {
    // ROW
    const row = document.createElement("tr");

    // PRODUCT ID COL
    const productIDCol = document.createElement("td");
    productIDCol.innerHTML = _order.productId;
    row.appendChild(productIDCol);

    // NAME, DESCRIPTION & PRICE PER UNIT
    for (product of parseProductsObject) {
      if (product._id == _order.product) {
        // NAME
        const nameCol = document.createElement("td");
        nameCol.innerHTML = product.name;
        row.appendChild(nameCol);
        // DESCRIPTION
        const descCol = document.createElement("td");
        descCol.innerHTML = product.description;
        row.appendChild(descCol);
        // PPU
        const ppuCol = document.createElement("td");
        ppuCol.innerHTML = product.pricePerUnit;
        row.appendChild(ppuCol);
        ppu = ppuCol;
      }
    }

    // QUANTITY
    const quantityCol = document.createElement("td");
    quantityCol.innerHTML = _order.quantity;
    row.appendChild(quantityCol);

    //PRICE
    const priceCol = document.createElement("td");
    priceCol.innerHTML =
      parseInt(quantityCol.innerHTML) * parseInt(ppu.innerHTML);
    row.appendChild(priceCol);

    productsTable.appendChild(row);
  }

  // TOTALS
  // SUBTOTAL
  const totalsSubtotal = document.querySelector("#totals_subtotal");
  totalsSubtotal.innerHTML = 0;
  const orderTable = document.querySelector("#products_table_body");
  const orderTableChilds = orderTable.childNodes;
  for (product of orderTableChilds) {
    const childs = product.childNodes;
    totalsSubtotal.innerHTML =
      parseInt(totalsSubtotal.innerHTML) + parseInt(childs[5].innerHTML);
  }

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
  */
};

const searchSaleButton = () => {
  const searchInvoice = document.querySelector("#order_search").value;
  const ordersTable = document.querySelector("#orders_body");
  const tableChilds = ordersTable.childNodes;
  for (order of tableChilds) {
    if (order.tagName == "TR") {
      console.log(order);
      childs = order.childNodes;
      console.log(childs);
      if (childs[1].innerHTML == searchInvoice) {
        childs[7].children[0].click();
      }
    }
  }
};
