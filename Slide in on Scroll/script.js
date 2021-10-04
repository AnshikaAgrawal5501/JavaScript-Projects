function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


function imageSlide () {
    const images = document.querySelectorAll(".slide-in");

    images.forEach (image => {

        const slideInAt = window.scrollY + window.innerHeight;
        const imageHalf = image.offsetTop + image.height/2;
        const imageBottom = image.offsetTop + image.height;

        if (slideInAt >= imageHalf && imageBottom >= window.scrollY) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
}


window.addEventListener("scroll", debounce(imageSlide));