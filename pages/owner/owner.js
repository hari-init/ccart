$(document).ready(() => {



    
     // the handler for the click event of the submit button
     $("#loginform").submit(event => {
        let isValid = true;
        
        // Retrieve the data from localStorage
        const storedData = localStorage.getItem('adminData');
  
        // Parse the stored JSON data
        const parsedData = JSON.parse(storedData);
  
  
        // Check if the data is not null or undefined
        if (parsedData) {
          // Extract the owners array from the parsed data
          const owners = parsedData.owners;
  
          // Loop through the owners array
          for (const owner of owners) {
              // Extract the contact email and password
              const contactEmail = owner.contactEmail;
              const ownerpassword = owner.password;
  
  
              // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
    
        if (email == "") {
           $("#email").next().text("This field is required.");
           isValid = false;
        } else if (!emailPattern.test(email)) {
           $("#email").next().text("Must be a valid email address.");
           isValid = false;
        }
        else
        {
            if(email!==contactEmail)
            {
                $("#email").next().text("This Email is not register");
                isValid = false;
            }
            else
            {
                $("#email").next().text("");
               
               
            }
            
        }
        $("#email").val(email);
    
        // validate the password entry
        const password = $("#password").val().trim();
        if (password.length < 6) {
           $("#password").next().text("Must be 6 or more characters.");
           isValid = false;
        } 
        else 
        { 
            if(password!==ownerpassword)
            {
                $("#password").next().text("Password is Wrong");
                isValid = false;
            }
            else
            {
                $("#password").next().text("");
                window.location.href = '../owner/owner.html'
               
            }
          
        }
        $("#passwordd").val(password);
   
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
           event.preventDefault();
        }
    
  
          }
        } 
    
        
     });
  

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