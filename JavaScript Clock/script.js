const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate () {

    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    // console.log (sec,min,hour);

    const secDegree = sec/60 * 360 + 90; //we add 90 because initially it is in 180deg and for it, it is 0deg. We want to initialize clock at 12oclock i.e 90deg so we add 90
    const minDegree = min/60 * 360 + 90;
    const hourDegree = hour/12* 360 + min/60*30 + 90;

    // console.log (secDegree,minDegree,hourDegree);

    secHand.style.transform = `rotate(${secDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    if (hour>=5 && hour<12) {
        document.body.style.backgroundImage = `url("img/dawn.png")`;
    } else if (hour>=12 && hour<16) {
        document.body.style.backgroundImage = `url("img/background.png")`;
    } else if (hour>=16 && hour<20) {
        document.body.style.backgroundImage = `url("img/dusk.jpg")`;
    } else if (hour>=20 && hour<24) {
        document.body.style.backgroundImage = `url("img/a.png")`;
    } else {
        document.body.style.backgroundImage = `url("img/night.jpg")`;
    } 
}

setInterval(setDate, 1000);