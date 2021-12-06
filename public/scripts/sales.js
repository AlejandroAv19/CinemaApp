// ORDERS ---------------------------------------------------------------------------------
// SHOW ORDER MODAL -----------------------------------------------------------------------
const showOrderModal = (order, products) => {
  let ppu = "";
  // ORDER
  const parseObject = JSON.parse(order);
  const orderObject = parseObject.products;

  // PRODUCTS
  const parseProductsObject = JSON.parse(products);
  // PRODUCTS TABLE
  const productsTable = document.querySelector("#order_products_table_body");

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
  const totalsSubtotal = document.querySelector("#order_totals_subtotal");
  totalsSubtotal.innerHTML = 0;
  const orderTable = document.querySelector("#order_products_table_body");
  const orderTableChilds = orderTable.childNodes;
  for (product of orderTableChilds) {
    const childs = product.childNodes;
    totalsSubtotal.innerHTML =
      parseInt(totalsSubtotal.innerHTML) + parseInt(childs[5].innerHTML);
  }

  // PROVIDERS CUT
  const totalsProvidersCut = document.querySelector(
    "#order_totals_providers_cut"
  );
  const cut = (parseFloat(totalsSubtotal.innerHTML) * 0.1).toFixed(1);
  totalsProvidersCut.innerHTML = cut;

  // IVA
  const totalsIVA = document.querySelector("#order_totals_iva");
  const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
  totalsIVA.innerHTML = iva;

  // TOTAL
  const totalsTotal = document.querySelector("#order_totals_total");
  const total =
    parseFloat(totalsSubtotal.innerHTML) +
    parseFloat(totalsProvidersCut.innerHTML) +
    parseFloat(totalsIVA.innerHTML);
  totalsTotal.innerHTML = total.toFixed(1);
};
// ----------------------------------------------------------------------------------------
// SEARCH ORDER BUTTON --------------------------------------------------------------------
const searchOrderButton = () => {
  const searchInvoice = document.querySelector("#order_search").value;
  const ordersTable = document.querySelector("#orders_body");
  const tableChilds = ordersTable.childNodes;
  for (order of tableChilds) {
    if (order.tagName == "TR") {
      childs = order.childNodes;
      if (childs[1].innerHTML == searchInvoice) {
        childs[7].children[0].click();
      }
    }
  }
};
// ----------------------------------------------------------------------------------------
// SALES ----------------------------------------------------------------------------------
// SHOW PRODUCT SALE MODAL ----------------------------------------------------------------
const showProductSaleModal = (sale, products) => {
  let ppu = "";
  // SALE
  const parseObject = JSON.parse(sale);
  const saleObject = parseObject.products;

  // PRODUCTS
  const parseProductsObject = JSON.parse(products);
  // PRODUCTS TABLE
  const saleProductsTable = document.querySelector("#sale_product_table_body");

  // CLEANING THE TABLE BEFORE SHOW
  while (saleProductsTable.firstChild) {
    saleProductsTable.removeChild(saleProductsTable.firstChild);
  }

  // FOR EVERY PRODUCT IN THE SALE
  for (_sale of saleObject) {
    // ROW
    const row = document.createElement("tr");

    // PRODUCT ID COL
    const productIDCol = document.createElement("td");
    productIDCol.innerHTML = _sale.productId;
    row.appendChild(productIDCol);

    // NAME, DESCRIPTION & PRICE PER UNIT
    for (product of parseProductsObject) {
      if (product._id == _sale.product) {
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
    quantityCol.innerHTML = _sale.quantity;
    row.appendChild(quantityCol);

    //PRICE
    const priceCol = document.createElement("td");
    priceCol.innerHTML =
      parseInt(quantityCol.innerHTML) * parseInt(ppu.innerHTML);
    row.appendChild(priceCol);

    saleProductsTable.appendChild(row);
  }

  // TOTALS
  // SUBTOTAL
  const totalsSubtotal = document.querySelector(
    "#sale_product_totals_subtotal"
  );
  totalsSubtotal.innerHTML = 0;
  const saleTable = document.querySelector("#sale_product_table_body");
  const saleTableChilds = saleTable.childNodes;
  for (product of saleTableChilds) {
    const childs = product.childNodes;
    totalsSubtotal.innerHTML =
      parseInt(totalsSubtotal.innerHTML) + parseInt(childs[5].innerHTML);
  }

  // IVA
  const totalsIVA = document.querySelector("#sale_product_totals_iva");
  const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
  totalsIVA.innerHTML = iva;

  // TOTAL
  const totalsTotal = document.querySelector("#sale_product_totals_total");
  const total =
    parseFloat(totalsSubtotal.innerHTML) + parseFloat(totalsIVA.innerHTML);
  totalsTotal.innerHTML = total.toFixed(1);
};
// ----------------------------------------------------------------------------------------
// SHOW TICKET SALE MODAL -----------------------------------------------------------------
const showTicketSaleModal = (sale) => {
  const objectParse = JSON.parse(sale);

  // MOVIE NAME
  const name = document.querySelector("#show_movie");
  name.innerHTML = objectParse.movie;

  // AUDITORIUM
  const auditorium = document.querySelector("#show_auditorium");
  auditorium.innerHTML = objectParse.auditorium;

  // DAY
  const day = document.querySelector("#show_day");
  day.innerHTML = objectParse.day;

  // SHOWTIME
  const showtime = document.querySelector("#show_showtime");
  showtime.innerHTML = objectParse.showtime;

  // NUMBER OF TICKETS
  const ticketsNumber = document.querySelector("#show_number_tickets");
  ticketsNumber.innerHTML = objectParse.ticketsNumber;

  // PRICE
  const price = document.querySelector("#show_price");
  price.innerHTML = (parseFloat(ticketsNumber.innerHTML) * 9.16).toFixed(1);

  // TOTALS
  // SUBTOTAL
  const subtotal = document.querySelector("#totals_subtotal");
  subtotal.innerHTML = price.innerHTML;

  // IVA
  const iva = document.querySelector("#totals_iva");
  iva.innerHTML = (parseFloat(subtotal.innerHTML) * 0.05).toFixed(1);

  // TOTAL
  const total = document.querySelector("#totals_total");
  total.innerHTML = (
    parseFloat(iva.innerHTML) + parseFloat(subtotal.innerHTML)
  ).toFixed(1);
};
// ----------------------------------------------------------------------------------------
// SEARCH SALE BUTTON ---------------------------------------------------------------------
const searchSaleButton = () => {
  const searchInvoice = document.querySelector("#sale_search").value;
  const ordersTable = document.querySelector("#sales_body");
  const tableChilds = ordersTable.childNodes;
  for (sale of tableChilds) {
    if (sale.tagName == "TR") {
      childs = sale.childNodes;
      if (childs[1].innerHTML == searchInvoice) {
        childs[9].children[0].click();
      }
    }
  }
};
