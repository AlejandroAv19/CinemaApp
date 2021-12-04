const addProduct = (products) => {
  // SETTING THE OBJECT
  const productsObject = JSON.parse(products);

  // GETTING THE PRODUCT ID
  const productID = document.querySelector("#search_product_id").value;

  // GETTING THE QUANTITY
  const quantity = document.querySelector("#product_quantity").value;

  // GETTING THE PRODUCT
  for (product of productsObject) {
    if (product.productId == productID) {
      // IF THE ROW ALREADY EXIST
      const rowAvailable = document.querySelector(
        `#product_${product.productId}`
      );

      if (!rowAvailable) {
        // SETTING THE ORDER OVERVIEW
        const tableBody = document.querySelector("#order_table_body");
        const productRow = document.createElement("tr");
        productRow.id = productID;

        // SETTING THE ID
        productRow.id = "product_" + product.productId;

        // PRODUCT NAME
        const productNameColumn = document.createElement("td");
        productNameColumn.innerHTML = product.name;
        productRow.appendChild(productNameColumn);

        // QUANTITY
        const quantityColumn = document.createElement("td");
        quantityColumn.innerHTML = quantity;
        productRow.appendChild(quantityColumn);

        // IF THE QUANTITY EXCEEDS THE AVAILABLE STOCK
        if (parseInt(quantityColumn.innerHTML) > parseInt(product.stock)) {
          alert("The Order Exceeds the Available Stock");
          productRow.remove();

          const totalsSubtotal = document.querySelector("#totals_subtotal");
          totalsSubtotal.innerHTML = 0;
          const orderTable = document.querySelector("#order_table_body");
          const orderTableChilds = orderTable.childNodes;
          for (product of orderTableChilds) {
            const childs = product.childNodes;
            totalsSubtotal.innerHTML =
              parseInt(totalsSubtotal.innerHTML) +
              parseInt(childs[3].innerHTML);
          }

          const totalsIVA = document.querySelector("#totals_iva");
          const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
          totalsIVA.innerHTML = iva;

          const totalsTotal = document.querySelector("#totals_total");
          const total =
            parseFloat(totalsSubtotal.innerHTML) +
            parseFloat(totalsIVA.innerHTML);
          totalsTotal.innerHTML = total.toFixed(1);
          break;
        }

        // PRICE PER UNIT
        const PPUColumn = document.createElement("td");
        PPUColumn.innerHTML = product.pricePerUnit;
        productRow.appendChild(PPUColumn);

        // PRICE
        const priceColumn = document.createElement("td");
        priceColumn.innerHTML =
          parseInt(quantityColumn.innerHTML) * parseInt(PPUColumn.innerHTML);
        productRow.appendChild(priceColumn);

        tableBody.appendChild(productRow);

        // ADD VALUES TO TOTALS
        // SUBTOTAL
        const totalsSubtotal = document.querySelector("#totals_subtotal");
        totalsSubtotal.innerHTML = 0;
        const orderTable = document.querySelector("#order_table_body");
        const orderTableChilds = orderTable.childNodes;
        for (product of orderTableChilds) {
          const childs = product.childNodes;
          totalsSubtotal.innerHTML =
            parseInt(totalsSubtotal.innerHTML) + parseInt(childs[3].innerHTML);
        }

        // IVA
        const totalsIVA = document.querySelector("#totals_iva");
        const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
        totalsIVA.innerHTML = iva;

        // TOTAL
        const totalsTotal = document.querySelector("#totals_total");
        const total =
          parseFloat(totalsSubtotal.innerHTML) +
          parseFloat(totalsIVA.innerHTML);
        totalsTotal.innerHTML = total.toFixed(1);
      } else {
        const productRow = document.querySelector(
          "#product_" + product.productId
        );
        const rowChilds = productRow.childNodes;

        // SETTING THE QUANTITY
        rowChilds[1].innerHTML =
          parseInt(rowChilds[1].innerHTML) + parseInt(quantity);

        // IF THE QUANTITY EXCEEDS THE AVAILABLE STOCK
        if (parseInt(rowChilds[1].innerHTML) > parseInt(product.stock)) {
          alert("The Order Exceeds the Available Stock");
          productRow.remove();

          const totalsSubtotal = document.querySelector("#totals_subtotal");
          totalsSubtotal.innerHTML = 0;
          const orderTable = document.querySelector("#order_table_body");
          const orderTableChilds = orderTable.childNodes;
          for (product of orderTableChilds) {
            const childs = product.childNodes;
            totalsSubtotal.innerHTML =
              parseInt(totalsSubtotal.innerHTML) +
              parseInt(childs[3].innerHTML);
          }

          const totalsIVA = document.querySelector("#totals_iva");
          const iva = (parseFloat(totalsSubtotal.innerHTML) * 0.05).toFixed(1);
          totalsIVA.innerHTML = iva;

          const totalsTotal = document.querySelector("#totals_total");
          const total =
            parseFloat(totalsSubtotal.innerHTML) +
            parseFloat(totalsIVA.innerHTML);
          totalsTotal.innerHTML = total.toFixed(1);
          break;
        }

        // SETTING THE PRICE
        rowChilds[3].innerHTML =
          parseInt(rowChilds[1].innerHTML) *
          parseInt(parseInt(rowChilds[2].innerHTML));

        // ADD VALUES TO TOTALS
        // SUBTOTAL
        const totalsSubtotal = document.querySelector("#totals_subtotal");
        totalsSubtotal.innerHTML = 0;
        const orderTable = document.querySelector("#order_table_body");
        const orderTableChilds = orderTable.childNodes;
        for (product of orderTableChilds) {
          const childs = product.childNodes;
          totalsSubtotal.innerHTML =
            parseInt(totalsSubtotal.innerHTML) + parseInt(childs[3].innerHTML);
        }

        // PROVIDERS CUT
        const totalsProvidersCut = document.querySelector(
          "#totals_providers_cut"
        );
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
      }
    }
  }
};

const submitForm = () => {
  // RETRIEVING FORM
  const form = document.querySelector("#output_form");

  // RETRIEVING THE PRODUCTS ROW
  const productsTable = document.querySelector("#order_table_body");
  const products = productsTable.childNodes;
  for (product of products) {
    const childs = product.childNodes;

    // PRODUCT NAME
    const productInput = document.createElement("input");
    productInput.value = childs[0].innerHTML;
    productInput.name = "_product";
    productInput.hidden = true;

    form.appendChild(productInput);

    // QUANTITY
    const quantityInput = document.createElement("input");
    quantityInput.value = childs[1].innerHTML;
    quantityInput.name = "quantity";
    quantityInput.hidden = true;

    form.appendChild(quantityInput);

    // PRICE PER UNIT
    const PPUInput = document.createElement("input");
    PPUInput.value = childs[2].innerHTML;
    PPUInput.name = "pricePerUnit";
    PPUInput.hidden = true;

    form.appendChild(PPUInput);
  }

  // DATE
  let date = document.querySelector("#date").innerHTML;
  const dateInput = document.createElement("input");
  dateInput.value = date;
  dateInput.name = "date";
  dateInput.hidden = true;

  form.appendChild(dateInput);

  // INVOICE
  const invoice = document.querySelector("#invoice").innerHTML;
  const invoiceInput = document.createElement("input");
  invoiceInput.value = invoice;
  invoiceInput.name = "invoice";
  invoiceInput.hidden = true;

  form.appendChild(invoiceInput);
};

const productIdChange = (products) => {
  let flag = false;
  const objectParse = JSON.parse(products);
  const searchProductID = document.querySelector("#search_product_id").value;
  for (product of objectParse) {
    if (product.productId == searchProductID) {
      const previewName = document.querySelector("#preview_name");
      previewName.innerHTML = product.name;

      const previewStockLimit = document.querySelector("#preview_stock_limit");
      previewStockLimit.innerHTML = product.stockLimit;

      const previewStock = document.querySelector("#preview_stock");
      previewStock.innerHTML = product.stock;
      flag = true;
    }
  }

  if (!flag) {
    const previewName = document.querySelector("#preview_name");
    previewName.innerHTML = "";

    const previewStockLimit = document.querySelector("#preview_stock_limit");
    previewStockLimit.innerHTML = "";

    const previewStock = document.querySelector("#preview_stock");
    previewStock.innerHTML = "";
  }
};
