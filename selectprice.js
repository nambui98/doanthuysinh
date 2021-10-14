(function(){
    var price=document.getElementsByClassName('select-price');
    for(var i=0;i<price.length;i++){
        price[i].addEventListener('click',select)
    }
})();
function select(event){
    var item=document.getElementsByClassName('text-wrapper');
    var button = event.target.parentElement;
    console.log(event.target)
    var priceFirst = parseFloat(button.getElementsByClassName('price-first')[0].innerText.replace('₫', '').replace(/,/g, ''));
    var priceSecond = parseFloat(button.getElementsByClassName('price-second')[0].innerText.replace('₫', '').replace(/,/g, ''));
    for(var i=0; i<item.length;i++){
        var priceItem = item[i].getElementsByClassName('shop-item-price');
        var price=parseFloat(priceItem[0].innerText.replace('₫','').replace(/,/g,''));
        if(price>=priceFirst && price<=priceSecond){
            item[i].style.display="flex";
            
        }
        else{
            item[i].style.display = "none";
        }
    }
    var count = document.getElementsByClassName('countSP')[0];
    //count.innerText=item.length;
    updateCount();
}
function updateCount() {
    var count = document.getElementsByClassName('countSP')[0];
    var a=0;
    var item = document.getElementsByClassName('text-wrapper');
    for(var i=0;i<item.length;i++){
        if(item[i].style.display==='flex'){
            a++;
        }
    }
    count.innerText = ' '+a+' ';
}

