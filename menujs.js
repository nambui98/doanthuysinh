window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var header = document.getElementById("header");
    if (document.body.scrollTop > 10) {
        header.classList.add('shrink');
        document.getElementById("img-header").style.height = "40px";
    } else {
        document.getElementById("header").classList.remove('shrink');
        document.getElementById("img-header").style.height = "60px";
    }
}