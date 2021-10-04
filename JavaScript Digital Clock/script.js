const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function clock () {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if (h<10) {
        h = "0"+h;
    }
    if (m<10) {
        m = "0"+m;
    }
    if (s<10) {
        s = "0"+s;
    }

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}




setInterval(clock,1000);