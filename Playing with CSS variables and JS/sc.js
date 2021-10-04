// This script file works fine when we need only one filter at a time.


const image=document.getElementById("img");
const imagebox=document.getElementById("img-box");
const space=document.getElementById("spacing");
const color=document.getElementById("color");
const blur=document.getElementById("blur");
const brightness=document.getElementById("brightness");
const contrast=document.getElementById("contrast");
const grayscale=document.getElementById("grayscale");
const hue=document.getElementById("hue-rotate");
const invert=document.getElementById("invert");
const opacity=document.getElementById("opacity");
const saturate=document.getElementById("saturate");
const sepia=document.getElementById("sepia");

function functionBorder () {
    imagebox.style.border = `${space.value}px solid ${color.value}`;
}

space.addEventListener("input", functionBorder);
color.addEventListener("input", functionBorder);

function filterBlur () {
    image.style.filter = `blur(${blur.value/20}px)`;
}
function filterHue () {
    image.style.filter = `hue-rotate(${hue.value}deg)`;
}
function filter () {
    image.style.filter = `${this.id}(${this.value/100})`
}
function filterSaturate () {
    image.style.filter = `saturate(${this.value/10})`
}

blur.addEventListener("input", filterBlur);
brightness.addEventListener("input", filter);
contrast.addEventListener("input", filter);
grayscale.addEventListener("input", filter);
hue.addEventListener("input", filterHue);
invert.addEventListener("input", filter);
opacity.addEventListener("input", filter);
saturate.addEventListener("input", filterSaturate);
sepia.addEventListener("input", filter);