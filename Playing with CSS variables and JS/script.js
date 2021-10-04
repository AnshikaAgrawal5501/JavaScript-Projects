const image = document.getElementById("img");
const imagebox=document.getElementById("img-box");
const js = document.getElementById("js");
const input = document.querySelectorAll(".controls input");

function functionBorder () {
    imagebox.style.border = `${input[0].value}px solid ${input[1].value}`;
}

function filters () {
    
    functionBorder();

    js.style.color = `${input[1].value}`;

    let filter = "";

    for (let i=2; i<input.length; i++) {

        let value = input[i].value;
        let id = input[i].id;

        if (id==="blur") {
            filter = filter + `blur(${value/20}px) `;
        } else if (id==="hue-rotate") {
            filter = filter + `hue-rotate(${value}deg) `;
        } else if (id==="saturate") {
            filter = filter + `saturate(${value/10}) `;
        } else {
            filter = filter + `${id}(${value/100}) `;
        }
    }
    image.style.filter = `${filter}`;
}

document.addEventListener("input", filters);
