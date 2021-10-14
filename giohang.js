(function(){
    var quantity = document.getElementsByClassName('quantity-input');
    for(var i=0;i<quantity.length;i++){
        quantity[i].addEventListener('change',function(event){
            var value=event.target;
            var total=0;
            var price = parseFloat(value.parentElement.parentElement.getElementsByClassName('price')[0].innerText.replace(/,/g, '').replace('₫',''));
            console.log(price)
            if(value.value<=0){
                value.value=1;
            }
            total=price*value.value;
            var totalItem=value.parentElement.parentElement.getElementsByClassName('total')[0];
            totalItem.innerText = total.toLocaleString() +'₫';
            totalItems()
        })
        
    }
    
})();
function totalItems(){
    var item = document.getElementsByClassName('bottom');
    var total = 0;
    var totalGiaohang=document.getElementsByClassName('gia');
    for (var i = 0; i < item.length; i++) {
        var totalItem = item[i].getElementsByClassName('total')[0];
        var value = parseFloat(totalItem.innerText.replace(/,/g, '').replace('₫', ''))
        total=total+value;
    }
    totalGiaohang[0].innerText = total.toLocaleString() +'₫';
    totalGiaohang[1].innerText = total.toLocaleString() + '₫';
}
totalItems()