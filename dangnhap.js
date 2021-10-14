(function(){
    var modal = document.getElementsByClassName('modal-signin')[0];
    var body=document.getElementsByTagName('body')[0];
    var menu = document.getElementById('header');
    document.getElementsByClassName('fa-user')[0].addEventListener('click',function(){
        
        //modal.style.display='flex';
        
        modal.style.visibility = 'visible';
        modal.getElementsByTagName('form')[0].style.transform = 'translateY(0)';
        modal.getElementsByTagName('form')[0].style.opacity = '1';
    })
    document.getElementsByClassName('bar')[0].addEventListener('click',function(){
        //modal.style.display = 'none';
        
        modal.getElementsByTagName('form')[0].style.transform = 'translateY(-100%)';
        modal.style.visibility = 'hidden';
        modal.getElementsByTagName('form')[0].style.opacity = '0';
    })
    window.addEventListener('click',function(event){
        if(event.target===modal){
            //modal.style.display = 'none';
            modal.getElementsByTagName('form')[0].style.transform = 'translateY(-100%)';
            modal.style.visibility = 'hidden';
            modal.getElementsByTagName('form')[0].style.opacity = '0';
            // modal.style.visibility = 'hidden';
            // body.style.overflowY = 'scroll';
        }
    })
    
})();
function ktTK(tk){
    var rg=/[a-zA-Z0-9]{1,50}/
    var tim=tk.match(rg);
    if(tim==tk){
        return true;
    }
    else{
        return false;
    }
}
(function(){
    var input=document.getElementsByClassName('input')[0];
    input.addEventListener('click',function(){
        var form = document.getElementById('form-dangnhap');
        var tk = form.elements[0];
        var mk=form.elements[1]
        console.log(tk)
        if(ktTK(tk.value)==false){
           // tk.style.border='1px'
            tk.style.border = 'none';
            tk.style.boxShadow = '0px 0px 5px 0px #ff0000';
            return;
        }
        else {
            tk.style.border = '1px solid #999';
            tk.style.boxShadow = 'none';
        }
        if(ktTK(mk.value)==false){
            mk.style.border = 'none';
            mk.style.boxShadow = '0px 0px 5px 0px #ff0000';
            return;
        }
        else{
            mk.style.border = '1px solid #999';
            mk.style.boxShadow = 'none';
        }
    })
})();