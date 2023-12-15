$(document).ready(function () {

  stocks = [
    {
      id: 1,
      flavor: "Vanilla",
      description:
        "Classic vanilla flavor with a rich and creamy taste. Perfect for those who love the timeless simplicity of vanilla.",
      quantity: 100,
      price: 2.5,
      allergenInfo: ["milk"],
      featured: true,
    },
    {
      id: 2,
      flavor: "Chocolate",
      description:
        "Indulge in the richness of our chocolate ice cream. Made with premium cocoa for a delightful chocolate experience.",
      quantity: 80,
      price: 3.0,
      allergenInfo: ["milk", "soy"],
      featured: false,
    },
    {
      id: 3,
      flavor: "Strawberry",
      description:
        "Experience the freshness of ripe strawberries in every scoop. A fruity and delightful treat for strawberry lovers.",
      quantity: 120,
      price: 3.5,
      allergenInfo: ["milk"],
      featured: true,
    },
    {
      id: 4,
      flavor: "Mint Chocolate Chip",
      description:
        "Cool and refreshing mint ice cream combined with decadent chocolate chips. A perfect blend of flavors.",
      quantity: 60,
      price: 4.0,
      allergenInfo: ["milk"],
      featured: false,
    },
    {
      id: 5,
      flavor: "Cookies and Cream",
      description:
        "Irresistible combination of vanilla ice cream with chunks of chocolate cookies. A classic favorite for cookie enthusiasts.",
      quantity: 90,
      price: 4.5,
      allergenInfo: ["milk", "wheat"],
      featured: true,
    },
    {
      id: 6,
      flavor: "Rocky Road",
      description:
        "A delightful mix of chocolate ice cream, marshmallows, and nuts. Indulge in the rocky road experience!",
      quantity: 70,
      price: 4.25,
      allergenInfo: ["milk", "nuts"],
      featured: false,
    },
    {
      id: 7,
      flavor: "Butter Pecan",
      description:
        "Rich buttery ice cream with crunchy pecans. A perfect blend of sweet and nutty flavors.",
      quantity: 50,
      price: 4.75,
      allergenInfo: ["milk", "nuts"],
      featured: true,
    },
    {
      id: 8,
      flavor: "Pistachio",
      description:
        "Smooth pistachio-flavored ice cream with real pistachio pieces. A delightful treat for pistachio lovers.",
      quantity: 65,
      price: 5.0,
      allergenInfo: ["milk", "nuts"],
      featured: false,
    },
  ];

  var productContainer = $("#productContainer");
  productContainer.empty();

  $.each(stocks, function (index, data) {
    var dataHtml = '<div class="product_list '+index+ '">';
    dataHtml += "<h4>" + data.flavor + "</h4>";
    dataHtml += "<p>" + data.description + "</p>";
    dataHtml += "<span>Quantity: " + data.quantity + "</span>";
    dataHtml += "<span>Price: " + data.price + "</span>";
    dataHtml += "<span>"+data.allergenInfo +"</span>";
    dataHtml += "<a href='product.html?id="+data.id+"'>Product Details</a>";
    dataHtml += "</div>";
    productContainer.append(dataHtml);
  });

  const url = new URLSearchParams(window.location.search);
  const productDataId = parseInt(url.get('id'));

  const selectedData = stocks.find(stock => stock.id === productDataId);

  if(selectedData){
    $("#product_name").text(selectedData.flavor);
    $("#product_desc").text(selectedData.description);
    $("#product_qun").text('Quantity: ' + selectedData.quantity);
    $("#product_price").text('Price: ' + selectedData.price);
    $("#product_allergen").text('Allergen Info: ' + selectedData.allergenInfo);

    $("#decrementQun").on("click",function(){
        var quantity = parseInt($("#quantity").val());
        if(quantity > 1){
            $("#quantity").val(quantity -1);
        }
    });

    $("#incrementQun").on("click",function(){
        var quantity = parseInt($("#quantity").val());
        $("#quantity").val(quantity + 1);
    })

    $("#addToCart").on('click',function(){
        var quantity = $("#quantity").val();
        addToCart(selectedData,quantity);
        window.location.href = "cart.html";
    })
  }else{
    console.error("Product Not Found");
  }
});
