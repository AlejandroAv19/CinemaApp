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
      }
    } else {
    }
  }
};
