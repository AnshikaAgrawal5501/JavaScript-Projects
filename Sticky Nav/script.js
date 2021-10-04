const nav = document.getElementById("main");
const content = document.querySelector(".site-wrap");
let navOffset = nav.offsetTop;

function sticky () {


    if (window.scrollY>=navOffset) {
        nav.classList.add("fixed-nav");
        content.classList.add("site-wrap-fixed");
        document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
        nav.classList.remove("fixed-nav");
        content.classList.remove("site-wrap-fixed");
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener("scroll", sticky);