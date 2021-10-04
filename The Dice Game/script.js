const head = document.querySelector("h1");
const p1 = document.querySelector(".img1");
const p2 = document.querySelector(".img2");

const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);

p1.setAttribute("src", `images/dice${randomNumber1}.png`);
p2.setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    head.innerText = `Player 1 Wins!`;
} else if (randomNumber1 < randomNumber2) {
    head.innerText = `Player 2 Wins!`;
} else {
    head.innerText = `Its a Tie...`;
}