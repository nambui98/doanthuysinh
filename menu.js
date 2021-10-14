window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var header=document.getElementById("header");
    if (document.body.scrollTop > 10) {
        header.classList.add('shrink');
        document.getElementById("img-header").src ="logo/logo-thuysinh-green.png";
    } else {
        document.getElementById("header").classList.remove('shrink');
        document.getElementById("img-header").src = "logo/logo-thuysinh-white.png";
    }
}