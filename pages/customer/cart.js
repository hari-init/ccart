var totalCartItems = [];

function addToCart(data,quantity){
    var exisitItem = totalCartItems.find(item=> item.id === data.id);
    if(exisitItem){
        let qty = parseInt(exisitItem.quantity)
        qty += qty;
        exisitItem.quantity = qty
    }
    else{
        totalCartItems.push({id: data.id, flavor: data.flavor, description: data.description, quantity: quantity, price:data.price});
    }
    saveItemToLocalStorage();
}

function saveItemToLocalStorage(){
    localStorage.setItem('cartData',JSON.stringify(totalCartItems));
}

function getCartDataStorage(){
    var storedProductData = localStorage.getItem('cartData');
    if(storedProductData){
        totalCartItems = JSON.parse(storedProductData);
    }
}

getCartDataStorage();

function saveItemToLocalStorage(){
    localStorage.setItem('cartData', JSON.stringify(totalCartItems));
}

function displayCartData(){
    if(totalCartItems.length === 0){
        $("#cartDataItem").text("No Items in the cart")
    }
    else{
        console.log(totalCartItems);
        $.each(totalCartItems,function(index,item){
            var cartDataHtml = '<tr>';
            cartDataHtml += '<td>' + item.flavor + '</td>';
            cartDataHtml += '<td>' + item.description + '</td>';
            cartDataHtml += '<td>' + item.quantity + '</td>';
            cartDataHtml += '<td>' + item.price +' </td>';
            cartDataHtml += '<td><button class="remove-btn" id="removeItem" data-index="'+index+'">Remove</button></td>';
            cartDataHtml += '</tr>';
            $("#cartDataItem").append(cartDataHtml);
        });
    }

    var removeProduct = $("#removeItem");
    for(var i=0; i < removeProduct.length; i++){
        removeProduct[i].addEventListener('click',removeProductFromCart);
    }
}

displayCartData();

function removeProductFromCart(){
 var productIndex = event.target.getAttribute('data-index');

 totalCartItems.splice(productIndex,1);
 displayCartData();
 saveItemToLocalStorage();
}

const goToCheckout = () => {
    window.location.href = './checkout/checkout.html'
}

