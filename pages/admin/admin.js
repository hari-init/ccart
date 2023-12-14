$(document).ready(() => {



         // the handler for the click event of the submit button
   $("#loginform").submit(event => {
    let isValid = true;
   

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
        if(email!=="admin@gmail.com")
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
        if(password!=="admin@1234")
        {
            $("#password").next().text("Password is Wrong");
            isValid = false;
        }
        else
        {
            $("#password").next().text("");
            window.location.href = '../admin/admin.html'
           
        }
      
    }
    $("#passwordd").val(password);

  
    
      

   

    // prevent the submission of the form if any entries are invalid 
    if (isValid == false) {
       event.preventDefault();
    }

    

 });


    const data = {
        "stores": [
            {
                "storeId": "ST01",
                "name": "Hari's store",
                "address": "789 Chic Avenue, Glam City, GC",
                "contactEmail": "hari@test.com",
                "type": "Ice Cream Store",
                "ownerName": "Victoria Elegance",
                "stocks": [
                    {
                        "id": 1,
                        "flavor": "Vanilla",
                        "description": "Classic vanilla flavor with a rich and creamy taste. Perfect for those who love the timeless simplicity of vanilla.",
                        "quantity": 100,
                        "price": 2.50,
                        "allergenInfo": ["milk"],
                        "featured": true
                    },
                    {
                        "id": 2,
                        "flavor": "Chocolate",
                        "description": "Indulge in the richness of our chocolate ice cream. Made with premium cocoa for a delightful chocolate experience.",
                        "quantity": 80,
                        "price": 3.00,
                        "allergenInfo": ["milk", "soy"],
                        "featured": false
                    },
                    {
                        "id": 3,
                        "flavor": "Strawberry",
                        "description": "Experience the freshness of ripe strawberries in every scoop. A fruity and delightful treat for strawberry lovers.",
                        "quantity": 120,
                        "price": 3.50,
                        "allergenInfo": ["milk"],
                        "featured": true
                    },
                    {
                        "id": 4,
                        "flavor": "Mint Chocolate Chip",
                        "description": "Cool and refreshing mint ice cream combined with decadent chocolate chips. A perfect blend of flavors.",
                        "quantity": 60,
                        "price": 4.00,
                        "allergenInfo": ["milk"],
                        "featured": false
                    },
                    {
                        "id": 5,
                        "flavor": "Cookies and Cream",
                        "description": "Irresistible combination of vanilla ice cream with chunks of chocolate cookies. A classic favorite for cookie enthusiasts.",
                        "quantity": 90,
                        "price": 4.50,
                        "allergenInfo": ["milk", "wheat"],
                        "featured": true
                    },
                    {
                        "id": 6,
                        "flavor": "Rocky Road",
                        "description": "A delightful mix of chocolate ice cream, marshmallows, and nuts. Indulge in the rocky road experience!",
                        "quantity": 70,
                        "price": 4.25,
                        "allergenInfo": ["milk", "nuts"],
                        "featured": false
                    },
                    {
                        "id": 7,
                        "flavor": "Butter Pecan",
                        "description": "Rich buttery ice cream with crunchy pecans. A perfect blend of sweet and nutty flavors.",
                        "quantity": 50,
                        "price": 4.75,
                        "allergenInfo": ["milk", "nuts"],
                        "featured": true
                    },
                    {
                        "id": 8,
                        "flavor": "Pistachio",
                        "description": "Smooth pistachio-flavored ice cream with real pistachio pieces. A delightful treat for pistachio lovers.",
                        "quantity": 65,
                        "price": 5.00,
                        "allergenInfo": ["milk", "nuts"],
                        "featured": false
                    }]
            },
            {
                "storeId": "ST987002",
                "name": "Tech Haven",
                "address": "123 Gadget Street, Techno Town, TT",
                "contactEmail": "tech.haven@storemail.com",
                "type": "Electronics Store",
                "ownerName": "Max Tech"
            },
            {
                "storeId": "ST987003",
                "name": "Nature's Bounty Market",
                "address": "456 Fresh Street, Green Valley, GV",
                "contactEmail": "natures.bounty@storemail.com",
                "type": "Organic Grocery",
                "ownerName": "Harper Green"
            },
            {
                "storeId": "ST987004",
                "name": "Cosmic Trends Apparel",
                "address": "789 Galaxy Lane, Star City, SC",
                "contactEmail": "cosmic.trends@storemail.com",
                "type": "Fashion Outlet",
                "ownerName": "Stella Star"
            },
            {
                "storeId": "ST987005",
                "name": "Bookworm's Paradise",
                "address": "123 Reader's Lane, Litburg, LB",
                "contactEmail": "bookworm.paradise@storemail.com",
                "type": "Bookstore",
                "ownerName": "Oliver Bookish"
            },
            {
                "storeId": "ST987006",
                "name": "Gourmet Delights",
                "address": "456 Culinary Street, Flavorville, FV",
                "contactEmail": "gourmet.delights@storemail.com",
                "type": "Gourmet Foods",
                "ownerName": "Gina Gourmet"
            },
            {
                "storeId": "ST987007",
                "name": "Adventure Outfitters",
                "address": "789 Explorer's Road, Trek Town, TT",
                "contactEmail": "adventure.outfitters@storemail.com",
                "type": "Outdoor Gear",
                "ownerName": "Alex Explorer"
            },
            {
                "storeId": "ST987008",
                "name": "Serene Spa Essentials",
                "address": "123 Tranquil Street, Zen City, ZC",
                "contactEmail": "serene.spa@storemail.com",
                "type": "Spa Supplies",
                "ownerName": "Serena Tranquil"
            },
            {
                "storeId": "ST987009",
                "name": "Fitness Fusion Gear",
                "address": "456 Health Avenue, Fitville, FV",
                "contactEmail": "fitness.fusion@storemail.com",
                "type": "Fitness Equipment",
                "ownerName": "Frank Fitness"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            },
            {
                "storeId": "ST987010",
                "name": "Retro Rewind Electronics",
                "address": "789 Nostalgia Lane, Vintage City, VC",
                "contactEmail": "retro.rewind@storemail.com",
                "type": "Vintage Electronics",
                "ownerName": "Ruby Retro"
            }
        ],
        "owners": [
            {
                "storeId": "ST987001",
                "storeName": "Elegant Emporium",
                "ownerName": "Victoria Elegance",
                "contactEmail": "tech.haven@storemail.com",
                "password": "qwerty"
            }
        ]
    }
    let adminData;

    if (localStorage.getItem('adminData')) {
        adminData = JSON.parse(localStorage.getItem('adminData'));
    } else {
        localStorage.setItem('adminData', JSON.stringify(data));
    }

    $("#storeGrid").jsGrid({
        height: "600px",
        width: "100%",
        name: 'stores',
        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: adminData.stores,

        fields: [
            { name: "name", align: "center", title: "Store Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "storeId", align: "center", title: "Store ID", type: "text", width: 40, validate: "required", sorting: true },
            { name: "address", align: "center", title: "Address", type: "text", width: 90, sorting: false },
            { name: "type", align: "center", title: "Store Type", type: "text", width: 70, sorting: false },
            { name: "ownerName", align: "center", title: "Owner", type: "text", width: 60, sorting: false },
            { name: "contactEmail", align: "center", type: "text", width: 100, validate: "required", title: "Store Email", sorting: false },
            { type: "control" }
        ],
        onItemInserted: (node) => {
            if (node.grid.name === 'stores') {
                adminData.stores.unshift(node.item);
                localStorage.setItem('adminData', JSON.stringify(adminData));
                $("#storeGrid").jsGrid("refresh");
            }
        },
        onItemDeleted: (node) => {
            if (node.grid.name === 'stores') {
                for (let i = 0; i < adminData.stores.length; i++) {
                    if (adminData.stores[i].storeId === node.item.storeId) {
                        adminData.stores.splice(i, 1);
                        break;
                    }
                    localStorage.setItem('adminData', JSON.stringify(adminData));
                    $("#storeGrid").jsGrid("refresh");
                }
            }
        },
        onItemUpdated: (node) => {
            if (node.grid.name === 'stores') {
                for (let i = 0; i < adminData.stores.length; i++) {
                    if (adminData.stores[i].storeId === node.item.storeId) {
                        adminData.stores[i] = node.item;
                        break;
                    }
                }
                localStorage.setItem('adminData', JSON.stringify(adminData));
                $("#storeGrid").jsGrid("refresh");
            }
        }
    });

    $("#ownerGrid").jsGrid({
        height: "600px",
        width: "100%",
        name: 'owners',
        inserting: true,
        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        data: adminData.owners,

        fields: [
            { name: "storeName", align: "center", title: "Store Name", type: "text", width: 60, validate: "required", sorting: false },
            { name: "storeId", align: "center", title: "Store ID", type: "text", width: 40, validate: "required", sorting: true },
            { name: "ownerName", align: "center", title: "Owner", type: "text", width: 60, sorting: false },
            { name: "password", align: "center", title: "Password", type: "text", width: 90, sorting: false },
            { name: "contactEmail", align: "center", title: "Email", type: "email", width: 100, title: "Store Email", sorting: false },
            { type: "control" }
        ],

        onItemInserted: (node) => {
            if (node.grid.name === 'owners') {
                adminData.owners.unshift(node.item);
                localStorage.setItem('adminData', JSON.stringify(adminData));
                $("#ownerGrid").jsGrid("refresh");
            }
        },
        onItemDeleted: (node) => {
            if (node.grid.name === 'owners') {
                for (let i = 0; i < adminData.owners.length; i++) {
                    if (adminData.owners[i].storeId === node.item.storeId) {
                        adminData.owners.splice(i, 1);
                        break;
                    }
                    localStorage.setItem('adminData', JSON.stringify(adminData));
                    $("#ownerGrid").jsGrid("refresh");
                }
            }
        },
        onItemUpdated: (node) => {
            if (node.grid.name === 'owners') {
                for (let i = 0; i < adminData.owners.length; i++) {
                    if (adminData.owners[i].storeId === node.item.storeId) {
                        adminData.owners[i] = node.item;
                        break;
                    }
                }
                localStorage.setItem('adminData', JSON.stringify(adminData));
                $("#ownerGrid").jsGrid("refresh");
            }
        }
    });
});


const openSection = (evt, section) => {
    let i;
    let tabContent;
    let tabLinks;
    tabContent = $(".tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = $(".tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    $(`#${section}`).css('display', 'block')
    $("#storeGrid").jsGrid("refresh");
    $("#ownerGrid").jsGrid("refresh");
    evt.currentTarget.className += " active";
}
