
function addSearchItem(){
    //var value_search = document.getElementById('myInput').value.toUpperCase();
    var textwrapper = document.getElementsByClassName('text-wrapper');
    var searchRow, title, price, imageSrc, searchItems;
    for (var i = 0; i < textwrapper.length; i++) {

        title = textwrapper[i].getElementsByClassName('shop-item-title')[0].innerText;
        price = textwrapper[i].getElementsByClassName('shop-item-price')[0].innerText;
        imageSrc = textwrapper[i].getElementsByClassName('shop-item-image')[0].src;
        // console.log(title.replace(/\s/g, ""));
        searchRow = document.createElement('a');
        searchRow.setAttribute('href',`/doanthuysinh/chitietsp/${title.replace(/\s/g, "")}.html`)
        searchRow.classList.add('search-row');
        searchItems = document.getElementsByClassName('search-items')[0];
        searchRowContents = `
            <div class="search-img">
                <img class="search-item-image" src="${imageSrc}">
            </div>
            <div class="search-item-right">
                <span class="search-item-title">${title}</span>
                <div class="search-quantity">
                    <span class="search-price">${price}</span>
                </div>
            </div>`
        searchRow.innerHTML = searchRowContents
        searchItems.append(searchRow)
    }
}
addSearchItem();
function search(){
    var countSearch=false;
    var value_search = document.getElementById('myInput').value.toUpperCase();
    var searchItems = document.getElementsByClassName('search-items')[0];
    var row = searchItems.getElementsByClassName('search-row');
    var notify=document.getElementsByClassName('notify')[0];
    console.log(row)
    console.log(searchItems)
    if(!value_search){
        searchItems.style.display='none';
        // searchItems.style.height = '80px';
    }
    else{
        for(var j=0;j<row.length;j++){
            var a = row[j].getElementsByClassName('search-item-title')[0].innerText.toUpperCase();
            console.log(a);
            if(a.indexOf(value_search)>-1){
                searchItems.style.display='block';
                searchItems.style.overflowY='scroll';
                searchItems.style.maxHeight = '400px';
                row[j].style.display='';
                notify.style.display='none'
                countSearch=true;
            }
            else{
                row[j].style.display='none';
            }
            
        }
        if (countSearch === false) {
            searchItems.style.overflowY = 'hidden';
            searchItems.style.fontFamily = "'Montserrat', sans-serif;";
            notify.style.display='flex';
        }
    }
    
}