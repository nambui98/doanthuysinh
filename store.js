if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('fa-cart-plus')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Cảm ơn bạn đã mua')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title.toUpperCase()) {
            alert('Bạn đã chọn sản phẩm này!')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-img">
            <img class="cart-item-image" src="${imageSrc}">
        </div>
        <div class="cart-item-right">
            <div class="cart-item-title">${title}</div>
            <div class="cart-quantity">
                <span class="cart-price">${price}</span>
                <input class="cart-quantity-input" type="number" value="1">
            </div>
        </div>
        <i class="fas fa-trash-alt btn-danger"></i>
        `
        
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('₫', '').replace(/,/g,''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total.toLocaleString()+'₫'
    document.getElementsByClassName('count-cart')[0].innerText = cartRows.length
}
(function(){
    
    var search = document.getElementsByClassName('search-item')[0];
    document.getElementsByClassName('fa-search')[0].addEventListener('click', function () {
        search.classList.toggle('item-click');
    })
    var cart = document.getElementsByClassName('content-section')[0]
    document.getElementsByClassName('fa-shopping-cart')[0].addEventListener('click',function(){
        cart.classList.toggle('item-click');
    })
})();
(function(){
    var item = document.getElementsByClassName('text-wrapper');
    for(var i=0;i<item.length;i++){
        var link = item[i].getElementsByClassName('shop-item-title')[0];
        link.addEventListener('click', function (event) {
            var href = '/doanthuysinh/chitietsp/' + event.target.innerText.replace(/\s/g, "") + '.html'
            window.location = href;
        })
    }
})();
(function () {
    var item = document.getElementsByClassName('item-xemthem');
    for (var i = 0; i < item.length; i++) {
        var link = item[i].getElementsByTagName('span')[0];

        link.addEventListener('click', function (event) {
            var href = '/doanthuysinh/chitietsp/' + event.target.innerText.replace(/\s/g, "") + '.html'
            window.location = href;
        })
    }
})();
(function(){
    var showCart = document.getElementsByClassName('btn-viewcart')[0];
    showCart.addEventListener('click',function(){
        window.location='/doanthuysinh/giohang.html'
    })
})();