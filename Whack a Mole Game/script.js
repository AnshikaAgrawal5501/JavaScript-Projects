const score_Board = document.querySelector(".score");
let score = 0;
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");

let isPlaying = false;

console.log(score_Board)
console.log(holes)
console.log(moles)

function getRandomTime() {
    return Math.floor(Math.random() * (1000-200) + 200);
}

function getRandomMole() {
    return Math.floor(Math.random() * moles.length);
}

function hammer(e) {
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    score_Board.textContent = score;
}

function start() {

    let ranMole = getRandomMole();
    const mole = moles[ranMole];
    mole.classList.add("up");

    let ranTime = getRandomTime();

    setTimeout(function() {
        mole.classList.remove("up");
        if (isPlaying) {
            start();
        }
    },ranTime);
}

function play () {
    score = 0;
    score_Board.innerHTML = score;
    isPlaying = true;

    start();

    setTimeout(function() {
        isPlaying = false;
        console.log("x");
    },10000);

}

moles.forEach(mole => mole.addEventListener("click", hammer));