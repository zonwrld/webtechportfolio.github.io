//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart
cartIcon.onclick=() =>{
    cart.classList.add("active");
};
//close cart
closeCart.onclick=() => {
    cart.classList.remove('active');
};

//Cart Working js
if (document.readyState =='loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

// making function
function ready(){
    //reomve items from cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove');
    console.log(reomveCartButtons);
    for (var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }


    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
 }
 //add to cart
 var addCart = document.getElementsByClassName('add-cart')
 for (var i = 0; i < addCart.length; i++){
 var button = addCart[i];
 button.addEventListener("click, addCartClicked");
 }
}
// buy button
function buyButtonClicked(){alert(message?: any): void
alert('Your Order is Placed')
var cartContent = document.getElementsByClassName('cart-content')[0]
while(cartContent.hasChildNodes()){hasChildNodes
cartContent.removeChild(cartcontent.firstChild)
}
updatetotal();
}
//reomve items from cart 2
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity Changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
}
    updatetotal();
}
// add to cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    var price = shopProducts.getElementsByClassName("price")[0].innerText
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg){
var cartShopBox = document.createElement("div");
cartShopBox.classList.add("cart-box");
var cartItems = document.getElementsByClassName("cart-content")[0]
var cartItemsNames = cartItems.getElementsByClassName("cart-product-title")
for (var i = 0; i < cartItemsNames.length; i++) {
    if(cartItems[i].innerText == title)
alert("You have already added this item to your cart");
return; 
}
}
var cartBoxContent = `
                        <img src="₱{productImg}" alt="" class="cart-img">
                        <div class="cart-product-title">₱{title}</div>
                        <div class="cart-price">₱42,000</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                     <!--remove cart-->
                     <i class='bx bxs-trash-alt cart-remove' ></i>`;
cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0]
.addEventListener('click', quantityChanged);

//update total
function updatetotal(){
var cartContent = document.getElementsByClassName("cart-content")[0];
var cartBoxes = cartContent.getElementsByClassName("cartbox");
var total = 0;
for (var i = 0; i < cartBoxes.length; i++) {
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName("cart-price")[0];
  var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
  var price = parseFloat(priceElement.innerText.replace("₱",""));
  var quantity = quantityElement.value;
  total = total + (price * quantity);


  document.getElementsByClassName("total-price")[0].innerText = "₱" + total;
 }
}
