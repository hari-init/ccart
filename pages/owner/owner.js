$(document).ready(() => {

  let adminData;
  let stocks;

  if (localStorage.getItem('adminData')) {
      adminData = JSON.parse(localStorage.getItem('adminData'));
      stocks = adminData.stores[0].stocks
  } 

    $("#stockGrid").jsGrid({
        height: "600px",
        width: "100%",
        name:  'stocks',
        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: stocks,

        fields: [
            { name: "flavor", align: "center", title: "Item Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "description", align: "center", title: "Description", type: "text", width: 100, validate: "required", sorting: false },
            { name: "quantity", align: "center", title: "Quantity", type: "text", width: 40, validate: "required", sorting: true },
            { name: "price", align: "center", title: "Price", type: "text", width: 90, sorting: false },
            { name: "allergenInfo", align: "center", title: "Allergen Info", type: "array", width: 90, sorting: false },
            { type: "control" }
        ],
        onItemInserted: (node) => {
          if (node.grid.name === 'stocks') {
              stocks.unshift(node.item);
              adminData.stores[0].stocks = stocks; // need to update with dynamic data
              localStorage.setItem('adminData', JSON.stringify(adminData));
              $("#storeGrid").jsGrid("refresh");
          }
      },
      onItemDeleted: (node) => {
          if (node.grid.name === 'stocks') {
              for (let i = 0; i < stocks.length; i++) {
                  if (stocks[i].id === node.item.id) {
                     stocks.splice(i, 1);
                      break;
                  }
                  adminData.stores[0].stocks = stocks; // need to update with dynamic data
                  localStorage.setItem('adminData', JSON.stringify(adminData));
                  $("#storeGrid").jsGrid("refresh");
              }
          }
      },
      onItemUpdated: (node) => {
          if (node.grid.name === 'stocks') {
              for (let i = 0; i < stocks.length; i++) {
                  if (stocks[i].id === node.item.id) {
                      stocks[i] = node.item;
                      break;
                  }
              }
              adminData.stores[0].stocks = stocks; // need to update with dynamic data
              localStorage.setItem('adminData', JSON.stringify(adminData));
              $("#storeGrid").jsGrid("refresh");
          }
      }
    });

});