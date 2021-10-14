(function(){
    document.getElementById('sortSP').addEventListener('change',sort);
})();
function sort(event) {
    var button = event.target.value;
    var list, i, switching, b,c, shouldSwitch;
    list = document.getElementsByClassName("right")[0];
    switching = true;
    b = list.getElementsByClassName("text-wrapper");
    if (button ==='GiaThap'){
        while (switching) {
            switching = false;
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (parseFloat(b[i].getElementsByClassName('shop-item-price')[0].innerText.replace('₫', '').replace(/,/g, '')) > parseFloat(b[i+1].getElementsByClassName('shop-item-price')[0].innerText.replace('₫', '').replace(/,/g, ''))) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
    else if (button ==='GiaCao'){
        while (switching) {
            switching = false; 
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (parseFloat(b[i].getElementsByClassName('shop-item-price')[0].innerText.replace('₫', '').replace(/,/g, '')) < parseFloat(b[i + 1].getElementsByClassName('shop-item-price')[0].innerText.replace('₫', '').replace(/,/g, ''))) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
        }
    }
    else if(button==='MD'){
        window.location.reload(false); 
    }
}


