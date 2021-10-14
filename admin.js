    (function(){
        var btn=document.getElementsByClassName('button-uc');
        for(var i=0;i<btn.length;i++){
            btn[i].addEventListener('click',function(event){
                var table = document.getElementsByClassName('add-table');
                var btn = document.getElementsByClassName('button-uc');
                for(var j=0;j<table.length;j++){
                    if (this.innerText === 'Quản Lý Nhân Viên') {
                        table[0].style.display = 'flex';
                        btn[0].style.color ='#7aba1e';
                        btn[1].style.color = '#000';
                        btn[2].style.color = '#000';
                        btn[3].style.color = '#000';
                        btn[4].style.color = '#000';
                        btn[5].style.color = '#000';
                        table[1].style.display='none';
                        table[2].style.display = 'none';
                        table[3].style.display = 'none';
                        table[4].style.display = 'none';
                        table[5].style.display = 'none';

                    }
                    else if (this.innerText === 'Quản Lý Sản Phẩm') {
                        table[0].style.display = 'none';
                        table[1].style.display = 'flex';
                        btn[1].style.color = '#7aba1e';
                        btn[0].style.color = '#000';
                        btn[2].style.color = '#000';
                        btn[3].style.color = '#000';
                        btn[4].style.color = '#000';
                        btn[5].style.color = '#000';

                        table[2].style.display = 'none';
                        table[3].style.display = 'none';
                        table[4].style.display = 'none';
                        table[5].style.display = 'none';
                    }
                    else if (this.innerText === 'Quản Lý Khách Hàng') {
                        table[2].style.display = 'flex';
                        btn[2].style.color = '#7aba1e';
                        btn[0].style.color = '#000';
                        btn[1].style.color = '#000';
                        btn[3].style.color = '#000';
                        btn[4].style.color = '#000';
                        btn[5].style.color = '#000';
                        table[0].style.display = 'none';
                        table[1].style.display = 'none';
                        table[3].style.display = 'none';
                        table[4].style.display = 'none';
                        table[5].style.display = 'none';
                    }
                    else if (this.innerText === 'Quản Lý Hóa Đơn Nhập') {
                        table[3].style.display = 'flex';
                        btn[3].style.color = '#7aba1e';
                        btn[0].style.color = '#000';
                        btn[2].style.color = '#000';
                        btn[1].style.color = '#000';
                        btn[4].style.color = '#000';
                        btn[5].style.color = '#000';
                        table[0].style.display = 'none';
                        table[1].style.display = 'none';
                        table[2].style.display = 'none';
                        table[4].style.display = 'none';
                        table[5].style.display = 'none';
                    }
                    else if (this.innerText === 'Quản Lý Hóa Đơn Xuất') {
                        table[4].style.display = 'flex';
                        btn[4].style.color = '#7aba1e';
                        btn[0].style.color = '#000';
                        btn[2].style.color = '#000';
                        btn[3].style.color = '#000';
                        btn[1].style.color = '#000';
                        btn[5].style.color = '#000';
                        table[0].style.display = 'none';
                        table[1].style.display = 'none';
                        table[3].style.display = 'none';
                        table[2].style.display = 'none';
                        table[5].style.display = 'none';
                    }
                    else if (this.innerText === 'Quản Lý Nhà Cung Cấp') {
                        table[5].style.display = 'flex';
                        btn[5].style.color = '#7aba1e';
                        btn[0].style.color = '#000';
                        btn[2].style.color = '#000';
                        btn[3].style.color = '#000';
                        btn[4].style.color = '#000';
                        btn[1].style.color = '#000';
                        table[0].style.display = 'none';
                        table[1].style.display = 'none';
                        table[3].style.display = 'none';
                        table[2].style.display = 'none';
                        table[4].style.display = 'none';
                    }
                }
            })
        }
    })();
    editRow();
    function editRow(){
        var edit=document.getElementsByClassName('fa-edit');
        for(var i=0;i<edit.length;i++){
            edit[i].addEventListener('click',edit_row)
        }
    }
    function edit_row(event){
        var table=event.target.parentElement.parentElement.parentElement.parentElement.attributes.id.value;
        var rowEdit = event.target.parentElement.parentElement.getElementsByTagName('td');
        var cell1=rowEdit[0];
        var cell2=rowEdit[1];
        var cell3=rowEdit[2];
        var cell4=rowEdit[3];
        var cell5=rowEdit[4];
        var cell6=rowEdit[5];
        var cell7 = rowEdit[6];
        var cell8 = rowEdit[7];
        var cell9 = rowEdit[8];
        var nv=document.getElementById('nv').attributes.id.value;
        var sp = document.getElementById('sp').attributes.id.value;
        var kh = document.getElementById('kh').attributes.id.value;
        var hdn = document.getElementById('hdn').attributes.id.value;
        var hdx = document.getElementById('hdx').attributes.id.value;
        var ncc = document.getElementById('ncc').attributes.id.value;
        console.log(table)
        var modal=document.getElementsByClassName('modal');
        if(table==nv){
            modal[0].style.display='flex';
            document.getElementsByClassName('add')[0].addEventListener('click', function () {
                var nv = document.getElementById('form-nv');
                var mnv = nv.elements[0].value;
                var tnv = nv.elements[1].value;
                var ngaysinh = new Date(nv.elements[2].value)
                var formatNS = ngaysinh.getDate() + '-' + (parseFloat(ngaysinh.getMonth()) + 1) + '-' + ngaysinh.getFullYear()
                var gt;
                for (var i = 0; i < nv.elements.length; i++) {
                    if (nv.elements[i].checked) {
                        gt = nv.elements[i].value;
                    }
                }
                var diachi = nv.elements[5].value;
                var chucvu = nv.elements[6].options[nv.elements[6].selectedIndex].text;
                var loainv = nv.elements[7].options[nv.elements[7].selectedIndex].text;
                var sdt = nv.elements[8].value
                var email = nv.elements[9].value
                if (KTMa(mnv) == false) {
                    nv.elements[0].style.border = 'none';
                    nv.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    nv.elements[0].style.border = '1px solid #999';
                    nv.elements[0].style.boxShadow = 'none';
                }
                if (KTTen(tnv) == false) {
                    nv.elements[1].style.border = 'none';
                    nv.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    nv.elements[1].style.border = '1px solid #999';
                    nv.elements[1].style.boxShadow = 'none';
                }
                if (KTsdt(sdt) == false) {
                    nv.elements[8].style.border = 'none';
                    nv.elements[8].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    nv.elements[8].style.border = '1px solid #999';
                    nv.elements[8].style.boxShadow = 'none';
                }
                if (checkEmail(email) == false) {
                    nv.elements[9].style.border = 'none';
                    nv.elements[9].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    nv.elements[9].style.border = '1px solid #999';
                    nv.elements[9].style.boxShadow = 'none';
                }
                cell1.innerText=mnv;
                cell2.innerText=tnv;
                cell3.innerText=formatNS;
                cell4.innerText=gt;
                cell5.innerText=diachi;
                cell6.innerText=chucvu;
                cell7.innerText=loainv;
                cell8.innerText=sdt;
                cell9.innerText=email;
            })
            document.getElementsByClassName('fa-times')[0].addEventListener('click', function () {
                modal[0].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[0]) {
                    modal[0].style.display = 'none';
                }
            })
        }
        else if(table==sp){
            modal[1].style.display = 'flex';
            document.getElementsByClassName('add')[1].addEventListener('click', function () {
                var sp = document.getElementById('form-sp');
                var msp = sp.elements[0].value;
                var tensp = sp.elements[1].value;
                var mdm = sp.elements[2].value;
                var mncc = sp.elements[3].value;
                var gia = sp.elements[4].value;
                var link = sp.elements[5].value;
                //C: \fakepath\02 - 4 - 300x300.jpg
                var soluong = sp.elements[6].value;
                var img = 'img' + link.slice(link.indexOf('fakepath')).replace('fakepath', '');
                // if (KTMa(mnv) == false) {
                //     nv.elements[0].style.border = 'none';
                //     nv.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[0].style.border = '1px solid #999';
                //     nv.elements[0].style.boxShadow = 'none';
                // }
                // if (KTTen(tnv) == false) {
                //     nv.elements[1].style.border = 'none';
                //     nv.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[1].style.border = '1px solid #999';
                //     nv.elements[1].style.boxShadow = 'none';
                // }
                // if (KTsdt(sdt) == false) {
                //     nv.elements[8].style.border = 'none';
                //     nv.elements[8].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[8].style.border = '1px solid #999';
                //     nv.elements[8].style.boxShadow = 'none';
                // }
                // if (checkEmail(email) == false) {
                //     nv.elements[9].style.border = 'none';
                //     nv.elements[9].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[9].style.border = '1px solid #999';
                //     nv.elements[9].style.boxShadow = 'none';
                // }
                cell1.innerText=msp;
                cell2.innerText=tensp;
                cell3.innerText=mdm;
                cell4.innerText=mncc;
                cell5.innerText=gia;
                cell6.getElementsByTagName('img')[0].src=img;
                cell7.innerText=soluong;
            })
            document.getElementsByClassName('fa-times')[1].addEventListener('click', function () {
                modal[1].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[1]) {
                    modal[1].style.display = 'none';
                }
            })
        }
        else if(table==kh){
            modal[2].style.display = 'flex';
            document.getElementsByClassName('add')[2].addEventListener('click', function () {
                var kh = document.getElementById('form-kh');
                var mkh = kh.elements[0].value;
                var tkh = kh.elements[1].value;
                var ngaysinh = new Date(kh.elements[2].value)
                var formatNS = ngaysinh.getDate() + '-' + (parseFloat(ngaysinh.getMonth()) + 1) + '-' + ngaysinh.getFullYear()
                var gt;
                for (var i = 0; i < kh.elements.length; i++) {
                    if (kh.elements[i].checked) {
                        gt = kh.elements[i].value;
                    }
                }
                var diachi = kh.elements[5].value;
                var sdt = kh.elements[6].value
                var email = kh.elements[7].value
                if (KTMa(mkh) == false) {
                    kh.elements[0].style.border = 'none';
                    kh.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[0].style.border = '1px solid #999';
                    kh.elements[0].style.boxShadow = 'none';
                }
                if (KTTen(tkh) == false) {
                    kh.elements[1].style.border = 'none';
                    kh.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[1].style.border = '1px solid #999';
                    kh.elements[1].style.boxShadow = 'none';
                }
                if (KTsdt(sdt) == false) {
                    kh.elements[6].style.border = 'none';
                    kh.elements[6].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[6].style.border = '1px solid #999';
                    kh.elements[6].style.boxShadow = 'none';
                }
                if (checkEmail(email) == false) {
                    kh.elements[7].style.border = 'none';
                    kh.elements[7].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[7].style.border = '1px solid #999';
                    kh.elements[7].style.boxShadow = 'none';
                }
                cell1.innerText=mkh;
                cell2.innerText=tkh;
                cell3.innerText=formatNS;
                cell4.innerText=gt;
                cell5.innerText=diachi;
                cell6.innerText=sdt;
                cell7.innerText=email;
            })
            document.getElementsByClassName('fa-times')[2].addEventListener('click', function () {
                modal[2].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[2]) {
                    modal[2].style.display = 'none';
                }
            })
        }
        else if (table == hdn) {
            modal[3].style.display = 'flex';
            var hdn = document.getElementById('form-hdn');
            hdn.elements[5].addEventListener('change', function (event) {
                var soluong = event.target;
                var gia = hdn.elements[6].value
                var tt = document.getElementsByClassName('thanhtien')[0];
                if (soluong.value <= 0) {
                    soluong.value = 1
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
            })
            hdn.elements[6].addEventListener('change', function (event) {
                var gia = event.target;
                var sl = hdn.elements[5].value
                var tt = document.getElementsByClassName('thanhtien')[0];
                if (gia.value <= 1000) {
                    gia.value = 1000
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
            })
            document.getElementsByClassName('add')[3].addEventListener('click', function () {

                var mhd = hdn.elements[0].value;
                var mncc = hdn.elements[1].value;
                var mnv = hdn.elements[2].value;
                var msp = hdn.elements[3].value;
                var ngaynhap = new Date(hdn.elements[4].value)
                var formatNN = ngaynhap.getDate() + '-' + (parseFloat(ngaynhap.getMonth()) + 1) + '-' + ngaynhap.getFullYear()
                var sl = hdn.elements[5].value
                var gia = hdn.elements[6].value
                //console.log(ngaynhap.getDate() + '-' +'-'+ngaynhap.getFullYear())
                console.log(formatNN)
                var thanhtien = (sl * gia).toLocaleString() + ' ₫';
                cell1.innerText=mhd;
                cell2.innerText=mncc;
                cell3.innerText=mnv;
                cell4.innerText=msp;
                cell5.innerText=formatNN;
                cell6.innerText=sl;
                cell7.innerText=gia;
                cell8.innerText=thanhtien;
            })
            document.getElementsByClassName('fa-times')[3].addEventListener('click', function () {
                modal[3].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[3]) {
                    modal[3].style.display = 'none';
                }
            })
        }
        else if (table == hdx) {
            modal[4].style.display = 'flex';
            var hdx = document.getElementById('form-hdx');
            hdx.elements[5].addEventListener('change', function (event) {
                var soluong = event.target;
                var gia = hdx.elements[6].value
                var tt = document.getElementsByClassName('thanhtien')[1];
                if (soluong.value <= 0) {
                    soluong.value = 1
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
            })
            hdx.elements[6].addEventListener('change', function (event) {
                var gia = event.target;
                var sl = hdx.elements[5].value
                var tt = document.getElementsByClassName('thanhtien')[1];
                if (gia.value <= 1000) {
                    gia.value = 1000
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
            })
            document.getElementsByClassName('add')[4].addEventListener('click', function () {

                var mhd = hdx.elements[0].value;
                var mncc = hdx.elements[1].value;
                var mnv = hdx.elements[2].value;
                var msp = hdx.elements[3].value;
                var ngaynhap = new Date(hdx.elements[4].value)
                var formatNN = ngaynhap.getDate() + '-' + (parseFloat(ngaynhap.getMonth()) + 1) + '-' + ngaynhap.getFullYear()
                var sl = hdx.elements[5].value
                var gia = hdx.elements[6].value
                //console.log(ngaynhap.getDate() + '-' +'-'+ngaynhap.getFullYear())
                console.log(formatNN)
                var thanhtien = (sl * gia).toLocaleString() + ' ₫';
                cell1.innerText = mhd;
                cell2.innerText = mncc;
                cell3.innerText = mnv;
                cell4.innerText = msp;
                cell5.innerText = formatNN;
                cell6.innerText = sl;
                cell7.innerText = gia;
                cell8.innerText = thanhtien;
            })
            document.getElementsByClassName('fa-times')[4].addEventListener('click', function () {
                modal[4].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[4]) {
                    modal[4].style.display = 'none';
                }
            })
        }
        else if (table == ncc) {
            modal[5].style.display = 'flex';
            document.getElementsByClassName('add')[5].addEventListener('click', function () {
                var ncc = document.getElementById('form-ncc');
                var mncc = ncc.elements[0].value;
                var tncc = ncc.elements[1].value;
                var diachi = ncc.elements[2].value;
                var sdt = ncc.elements[3].value
                var email = ncc.elements[4].value
                if (KTMa(mncc) == false) {
                    ncc.elements[0].style.border = 'none';
                    ncc.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[0].style.border = '1px solid #999';
                    ncc.elements[0].style.boxShadow = 'none';
                }
                if (KTTen(tncc) == false) {
                    ncc.elements[1].style.border = 'none';
                    ncc.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[1].style.border = '1px solid #999';
                    ncc.elements[1].style.boxShadow = 'none';
                }
                if (KTsdt(sdt) == false) {
                    ncc.elements[3].style.border = 'none';
                    ncc.elements[3].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[3].style.border = '1px solid #999';
                    ncc.elements[3].style.boxShadow = 'none';
                }
                if (checkEmail(email) == false) {
                    ncc.elements[4].style.border = 'none';
                    ncc.elements[4].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[4].style.border = '1px solid #999';
                    ncc.elements[4].style.boxShadow = 'none';
                }
                cell1.innerText=mncc;
                cell2.innerText=tncc;
                cell3.innerText=diachi;
                cell4.innerText=sdt;
                cell5.innerText=email;
            })
            document.getElementsByClassName('fa-times')[5].addEventListener('click', function () {
                modal[5].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[5]) {
                    modal[5].style.display = 'none';
                }
            })
        }
    }
    function removeRow(){
        var remove=document.getElementsByClassName('fa-trash-alt');
        var totalNv = document.getElementsByClassName('total-detail')[0];
        var totalSp = document.getElementsByClassName('total-detail')[1];
        var totalKh = document.getElementsByClassName('total-detail')[2];
        var totalHdn = document.getElementsByClassName('total-detail')[3];
        var totalHdx = document.getElementsByClassName('total-detail')[4];
        var totalNcc = document.getElementsByClassName('total-detail')[5];
        var nv = document.getElementsByClassName('table-uc')[0].getElementsByTagName('tr');
        var sp=document.getElementsByClassName('table-uc')[1].getElementsByTagName('tr')
        var kh = document.getElementsByClassName('table-uc')[2].getElementsByTagName('tr')
        var hdn = document.getElementsByClassName('table-uc')[3].getElementsByTagName('tr')
        var hdx = document.getElementsByClassName('table-uc')[4].getElementsByTagName('tr')
        var ncc = document.getElementsByClassName('table-uc')[5].getElementsByTagName('tr')
        totalNv.innerText = nv.length;
        totalSp.innerText = sp.length;
        totalKh.innerText = kh.length;
        totalHdn.innerText = hdn.length;
        totalHdx.innerText = hdx.length;
        totalNcc.innerText = ncc.length;
        for(var i=0;i<remove.length;i++){
            remove[i].addEventListener('click',function(event){
                var bool=confirm("Bạn có muốn xóa không?");
                if(bool==true)
                {
                    event.target.parentElement.parentElement.remove()
                    totalNv.innerText=nv.length;
                    totalSp.innerText = sp.length;
                    totalKh.innerText=kh.length;
                    totalHdn.innerText = hdn.length;
                    totalHdx.innerText = hdx.length;
                    totalNcc.innerText = ncc.length;
                }
                else{
                    
                    return;
                }
            })
        }
    }
    
function KTMa(ma) {
    rg = /[0-9]{6}/;
    tim = ma.match(rg);
    if (tim == ma)
        return true;
    else
        return false;
}
function KTTen(ten) {
    rg = /[^~!$%&*()0-9]{1,50}/;
    tim = ten.match(rg);
    if (tim == ten)
        return true;
    else
        return false;
}
function checkEmail(email) {
    rg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    tim = email.match(rg);
    if (tim == email) {
        return true;
    }
    else {
        return false;
    }
} 
function KTsdt(sdt){
    rg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(sdt==sdt.match(rg)){
        return true;
    }
    else{
        return false;
    }
}
    (function(){
        var btnAdd=document.getElementsByClassName('btn-add');
        var button=btnAdd[0].getElementsByTagName('button')
        button[0].addEventListener('click',function(){
            var modal=document.getElementsByClassName('modal');
            modal[0].style.display='flex';
            document.getElementsByClassName('add')[0].addEventListener('click', function(){
                var nv = document.getElementById('form-nv');
                var mnv = nv.elements[0].value;
                var tnv= nv.elements[1].value;
                var ngaysinh = new Date(nv.elements[2].value)
                var formatNS = ngaysinh.getDate() + '-' + (parseFloat(ngaysinh.getMonth()) + 1) + '-' + ngaysinh.getFullYear()
                
                var gt;
                for(var i=0;i<nv.elements.length;i++){
                    if(nv.elements[i].checked){
                        gt=nv.elements[i].value;
                    }
                }
                var diachi=nv.elements[5].value;
                var chucvu = nv.elements[6].options[nv.elements[6].selectedIndex].text;
                var loainv = nv.elements[7].options[nv.elements[7].selectedIndex].text;
                var sdt=nv.elements[8].value
                var email=nv.elements[9].value
                if(KTMa(mnv)==false){
                    nv.elements[0].style.border = 'none';
                    nv.elements[0].style.boxShadow ='0px 0px 5px 0px #ff0000';
                    return;
                }
                else{
                    nv.elements[0].style.border = '1px solid #999';
                    nv.elements[0].style.boxShadow='none';
                }
                if(KTTen(tnv)==false){
                    nv.elements[1].style.border = 'none';
                    nv.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else{
                    nv.elements[1].style.border = '1px solid #999';
                    nv.elements[1].style.boxShadow = 'none';
                }
                if(KTsdt(sdt)==false){
                    nv.elements[8].style.border = 'none';
                    nv.elements[8].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else{
                    nv.elements[8].style.border = '1px solid #999';
                    nv.elements[8].style.boxShadow = 'none';
                }
                if(checkEmail(email)==false){
                    nv.elements[9].style.border = 'none';
                    nv.elements[9].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else{
                    nv.elements[9].style.border = '1px solid #999';
                    nv.elements[9].style.boxShadow = 'none';
                }
                var row=document.createElement('tr');
                var table=document.getElementsByClassName('table-uc')[0].getElementsByTagName('tbody')[0];
                var tr=`
                <tr>
                    <td>${mnv}</td>
                    <td>${tnv}</td>
                    <td>${formatNS}</td>
                    <td>${gt}</td>
                    <td>${diachi}</td>
                    <td>${chucvu}</td>
                    <td>${loainv}</td>
                    <td>${sdt}</td>
                    <td>${email}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML=tr;
                table.append(row);
                //alert('Thêm thành công')
                //modal[0].style.display = 'none';
                // if(thongbao===true){
                //     modal[0].style.display = 'none';
                // }
                removeRow();
            })
            document.getElementsByClassName('fa-times')[0].addEventListener('click',function(){
                modal[0].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[0]) {
                    modal[0].style.display='none';
                }
            })

        })
        
        btnAdd[1].getElementsByTagName('button')[0].addEventListener('click', function () {
            var modal = document.getElementsByClassName('modal');
            modal[1].style.display = 'flex';
            document.getElementsByClassName('add')[1].addEventListener('click', function () {
                var sp = document.getElementById('form-sp');
                var msp = sp.elements[0].value;
                var tensp = sp.elements[1].value;
                var mdm = sp.elements[2].value;
                var mncc=sp.elements[3].value;
                var gia = sp.elements[4].value;
                var link = sp.elements[5].value;
                //C: \fakepath\02 - 4 - 300x300.jpg
                var soluong = sp.elements[6].value;
                var img='img'+link.slice(link.indexOf('fakepath')).replace('fakepath','');
                // if (KTMa(mnv) == false) {
                //     nv.elements[0].style.border = 'none';
                //     nv.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[0].style.border = '1px solid #999';
                //     nv.elements[0].style.boxShadow = 'none';
                // }
                // if (KTTen(tnv) == false) {
                //     nv.elements[1].style.border = 'none';
                //     nv.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[1].style.border = '1px solid #999';
                //     nv.elements[1].style.boxShadow = 'none';
                // }
                // if (KTsdt(sdt) == false) {
                //     nv.elements[8].style.border = 'none';
                //     nv.elements[8].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[8].style.border = '1px solid #999';
                //     nv.elements[8].style.boxShadow = 'none';
                // }
                // if (checkEmail(email) == false) {
                //     nv.elements[9].style.border = 'none';
                //     nv.elements[9].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     nv.elements[9].style.border = '1px solid #999';
                //     nv.elements[9].style.boxShadow = 'none';
                // }
                var row = document.createElement('tr');
                var table = document.getElementsByClassName('table-uc')[1].getElementsByTagName('tbody')[0];
                var tr = `
                <tr>
                    <td>${msp}</td>
                    <td>${tensp}</td>
                    <td>${mdm}</td>
                    <td>${mncc}</td>
                    <td>${gia}</td>
                    <td><img src="${img}" alt=""></td>
                    <td>${soluong}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML = tr;
                table.append(row);
                removeRow();
            })
            document.getElementsByClassName('fa-times')[1].addEventListener('click', function () {
                modal[1].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[1]) {
                    modal[1].style.display = 'none';
                }
            })
        })
        btnAdd[2].getElementsByTagName('button')[0].addEventListener('click', function () {
            var modal = document.getElementsByClassName('modal');
            modal[2].style.display = 'flex';
            document.getElementsByClassName('add')[2].addEventListener('click', function () {
                var kh = document.getElementById('form-kh');
                var mkh = kh.elements[0].value;
                var tkh = kh.elements[1].value;
                var ngaysinh = kh.elements[2].value;
                var gt;
                for (var i = 0; i < kh.elements.length; i++) {
                    if (kh.elements[i].checked) {
                        gt = kh.elements[i].value;
                    }
                }
                var diachi = kh.elements[5].value;
                var sdt = kh.elements[6].value
                var email = kh.elements[7].value
                if (KTMa(mkh) == false) {
                    kh.elements[0].style.border = 'none';
                    kh.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[0].style.border = '1px solid #999';
                    kh.elements[0].style.boxShadow = 'none';
                }
                if (KTTen(tkh) == false) {
                    kh.elements[1].style.border = 'none';
                    kh.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[1].style.border = '1px solid #999';
                    kh.elements[1].style.boxShadow = 'none';
                }
                if (KTsdt(sdt) == false) {
                    kh.elements[6].style.border = 'none';
                    kh.elements[6].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[6].style.border = '1px solid #999';
                    kh.elements[6].style.boxShadow = 'none';
                }
                if (checkEmail(email) == false) {
                    kh.elements[7].style.border = 'none';
                    kh.elements[7].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    kh.elements[7].style.border = '1px solid #999';
                    kh.elements[7].style.boxShadow = 'none';
                }
                var row = document.createElement('tr');
                var table = document.getElementsByClassName('table-uc')[2].getElementsByTagName('tbody')[0];
                var tr = `
                <tr>
                    <td>${mkh}</td>
                    <td>${tkh}</td>
                    <td>${ngaysinh}</td>
                    <td>${gt}</td>
                    <td>${diachi}</td>
                    <td>${sdt}</td>
                    <td>${email}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML = tr;
                table.append(row);
                removeRow();
            })
            document.getElementsByClassName('fa-times')[2].addEventListener('click', function () {
                modal[2].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[2]) {
                    modal[2].style.display = 'none';
                }
            })
        })
        btnAdd[3].getElementsByTagName('button')[0].addEventListener('click', function () {
            var modal = document.getElementsByClassName('modal');
            modal[3].style.display = 'flex';
            var hdn = document.getElementById('form-hdn');
            hdn.elements[5].addEventListener('change', function (event) {
                var soluong = event.target;
                var gia = hdn.elements[6].value
                var tt = document.getElementsByClassName('thanhtien')[0];
                if (soluong.value <= 0) {
                    soluong.value = 1
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
                else{
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
            })
            hdn.elements[6].addEventListener('change', function (event) {
                var gia = event.target;
                var sl = hdn.elements[5].value
                var tt = document.getElementsByClassName('thanhtien')[0];
                if (gia.value <= 1000) {
                    gia.value = 1000
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
            })
            document.getElementsByClassName('add')[3].addEventListener('click', function () {
                
                var mhd = hdn.elements[0].value;
                var mncc = hdn.elements[1].value;
                var mnv = hdn.elements[2].value;
                var msp = hdn.elements[3].value;
                var ngaynhap = new Date(hdn.elements[4].value)
                var formatNN = ngaynhap.getDate() + '-' + (parseFloat(ngaynhap.getMonth()) + 1)+ '-' + ngaynhap.getFullYear()
                var sl= hdn.elements[5].value
                var gia=hdn.elements[6].value
                //console.log(ngaynhap.getDate() + '-' +'-'+ngaynhap.getFullYear())
                console.log(formatNN)
                var thanhtien = (sl * gia).toLocaleString() +' ₫';
                // if (KTMa(mkh) == false) {
                //     kh.elements[0].style.border = 'none';
                //     kh.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[0].style.border = '1px solid #999';
                //     kh.elements[0].style.boxShadow = 'none';
                // }
                // if (KTTen(tkh) == false) {soluong=event.target;
                //console.log(soluong)
                //     kh.elements[1].style.border = 'none';
                //     kh.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[1].style.border = '1px solid #999';
                //     kh.elements[1].style.boxShadow = 'none';
                // }
                // if (KTsdt(sdt) == false) {
                //     kh.elements[6].style.border = 'none';
                //     kh.elements[6].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[6].style.border = '1px solid #999';
                //     kh.elements[6].style.boxShadow = 'none';
                // }
                // if (checkEmail(email) == false) {
                //     kh.elements[7].style.border = 'none';
                //     kh.elements[7].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[7].style.border = '1px solid #999';
                //     kh.elements[7].style.boxShadow = 'none';
                // }
                var row = document.createElement('tr');
                var table = document.getElementsByClassName('table-uc')[3].getElementsByTagName('tbody')[0];
                var tr = `
                <tr>
                    <td>${mhd}</td>
                    <td>${mncc}</td>
                    <td>${mnv}</td>
                    <td>${msp}</td>
                    <td>${formatNN}</td>
                    <td>${sl}</td>
                    <td>${gia}</td>
                    <td>${thanhtien}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML = tr;
                table.append(row);
                removeRow();
            })
            document.getElementsByClassName('fa-times')[3].addEventListener('click', function () {
                modal[3].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[3]) {
                    modal[3].style.display = 'none';
                }
            })
        })
        btnAdd[4].getElementsByTagName('button')[0].addEventListener('click', function () {
            var modal = document.getElementsByClassName('modal');
            modal[4].style.display = 'flex';
            var hdx = document.getElementById('form-hdx');
            hdx.elements[5].addEventListener('change', function (event) {
                var soluong = event.target;
                var gia = hdx.elements[6].value
                var tt = document.getElementsByClassName('thanhtien')[1];
                if (soluong.value <= 0) {
                    soluong.value = 1
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (soluong.value * gia).toLocaleString() + ' ₫';
                }
            })
            hdx.elements[6].addEventListener('change', function (event) {
                var gia = event.target;
                var sl = hdx.elements[5].value
                var tt = document.getElementsByClassName('thanhtien')[1];
                if (gia.value <= 1000) {
                    gia.value = 1000
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
                else {
                    tt.innerText = (gia.value * sl).toLocaleString() + ' ₫';
                }
            })
            document.getElementsByClassName('add')[4].addEventListener('click', function () {

                var mhd = hdx.elements[0].value;
                var mncc = hdx.elements[1].value;
                var mnv = hdx.elements[2].value;
                var msp = hdx.elements[3].value;
                var ngaynhap = new Date(hdx.elements[4].value)
                var formatNN = ngaynhap.getDate() + '-' + (parseFloat(ngaynhap.getMonth()) + 1) + '-' + ngaynhap.getFullYear()
                var sl = hdx.elements[5].value
                var gia = hdx.elements[6].value
                //console.log(ngaynhap.getDate() + '-' +'-'+ngaynhap.getFullYear())
                console.log(formatNN)
                var thanhtien = (sl * gia).toLocaleString() + ' ₫';
                // if (KTMa(mkh) == false) {
                //     kh.elements[0].style.border = 'none';
                //     kh.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[0].style.border = '1px solid #999';
                //     kh.elements[0].style.boxShadow = 'none';
                // }
                // if (KTTen(tkh) == false) {soluong=event.target;
                //console.log(soluong)
                //     kh.elements[1].style.border = 'none';
                //     kh.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[1].style.border = '1px solid #999';
                //     kh.elements[1].style.boxShadow = 'none';
                // }
                // if (KTsdt(sdt) == false) {
                //     kh.elements[6].style.border = 'none';
                //     kh.elements[6].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[6].style.border = '1px solid #999';
                //     kh.elements[6].style.boxShadow = 'none';
                // }
                // if (checkEmail(email) == false) {
                //     kh.elements[7].style.border = 'none';
                //     kh.elements[7].style.boxShadow = '0px 0px 5px 0px #ff0000';
                //     return;
                // }
                // else {
                //     kh.elements[7].style.border = '1px solid #999';
                //     kh.elements[7].style.boxShadow = 'none';
                // }
                var row = document.createElement('tr');
                var table = document.getElementsByClassName('table-uc')[4].getElementsByTagName('tbody')[0];
                var tr = `
                <tr>
                    <td>${mhd}</td>
                    <td>${mncc}</td>
                    <td>${mnv}</td>
                    <td>${msp}</td>
                    <td>${formatNN}</td>
                    <td>${sl}</td>
                    <td>${gia}</td>
                    <td>${thanhtien}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML = tr;
                table.append(row);
                removeRow();
            })
            document.getElementsByClassName('fa-times')[4].addEventListener('click', function () {
                modal[4].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[4]) {
                    modal[4].style.display = 'none';
                }
            })
        })
        btnAdd[5].getElementsByTagName('button')[0].addEventListener('click', function () {
            var modal = document.getElementsByClassName('modal');
            modal[5].style.display = 'flex';
            document.getElementsByClassName('add')[5].addEventListener('click', function () {
                var ncc = document.getElementById('form-ncc');
                var mncc = ncc.elements[0].value;
                var tncc = ncc.elements[1].value;
                var diachi = ncc.elements[2].value;
                var sdt = ncc.elements[3].value
                var email = ncc.elements[4].value
                if (KTMa(mncc) == false) {
                    ncc.elements[0].style.border = 'none';
                    ncc.elements[0].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[0].style.border = '1px solid #999';
                    ncc.elements[0].style.boxShadow = 'none';
                }
                if (KTTen(tncc) == false) {
                    ncc.elements[1].style.border = 'none';
                    ncc.elements[1].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[1].style.border = '1px solid #999';
                    ncc.elements[1].style.boxShadow = 'none';
                }
                if (KTsdt(sdt) == false) {
                    ncc.elements[3].style.border = 'none';
                    ncc.elements[3].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[3].style.border = '1px solid #999';
                    ncc.elements[3].style.boxShadow = 'none';
                }
                if (checkEmail(email) == false) {
                    ncc.elements[4].style.border = 'none';
                    ncc.elements[4].style.boxShadow = '0px 0px 5px 0px #ff0000';
                    return;
                }
                else {
                    ncc.elements[4].style.border = '1px solid #999';
                    ncc.elements[4].style.boxShadow = 'none';
                }
                var row = document.createElement('tr');
                var table = document.getElementsByClassName('table-uc')[5].getElementsByTagName('tbody')[0];
                var tr = `
                <tr>
                    <td>${mncc}</td>
                    <td>${tncc}</td>
                    <td>${ngaysinh}</td>
                    <td>${diachi}</td>
                    <td>${sdt}</td>
                    <td>${email}</td>
                    <td><i class="far fa-edit"></i></td>
                    <td><i class="far fa-trash-alt"></i></td>
                </tr>
                `
                row.innerHTML = tr;
                table.append(row);
                removeRow();
            })
            document.getElementsByClassName('fa-times')[5].addEventListener('click', function () {
                modal[5].style.display = 'none';
            })
            window.addEventListener('click', function (event) {
                if (event.target === modal[5]) {
                    modal[5].style.display = 'none';
                }
            })
        })
    })();
    
    removeRow();
    (function(){
        
        document.getElementsByClassName('search')[0].addEventListener('keyup',function(){
            var value = document.getElementsByClassName('search')[0].value.toUpperCase();
            var table = document.getElementsByClassName('add-table');
            //console.log(table[0].getElementsByTagName('tr')[0])
            for (var i = 0; i < table.length; i++) {
                var tr = table[i].getElementsByTagName('tr');
                for (var j = 0; j < tr.length; j++) {
                    var td = tr[j].getElementsByTagName('td')[1];
                    var txtvalue;
                    if(td){
                        txtvalue=td.innerText;
                        if(txtvalue.toUpperCase().indexOf(value)>-1){
                            //table[i].style.display="";
                            tr[j].style.display="";
                        } 
                        else{
                            //table[i].style.display = "none";
                            tr[j].style.display="none"

                        }
                    }
                    // }
                    // var tdText = td[0].innerText.toUpperCase();
                    // console.log(td[f])
                    // if (tdText.indexOf(value) > -1) {
                    //     // console.log(tdText)
                    //     // console.log(table[i])
                    //     // console.log(tr[j])
                    //     table[i].style.display = 'flex';
                    //     tr[j].style.display = 'table-row';
                    // }
                    // else {
                    //     table[i].style.display = 'none';
                    //     tr[j].style.display = 'none';
                    // }
                }
                // for(var j=0; j<row.length;j++){
                //     var cellMa=row[1]
                // }

            }
        })
        
        
        
    })();