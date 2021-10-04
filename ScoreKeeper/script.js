var button1 = document.querySelector("#ctr1")
var p1s = document.querySelector("#score1")
var score1 = 0

var button2 = document.querySelector("#ctr2")
var p2s = document.querySelector("#score2")
var score2 = 0

var reset = document.querySelector("#reset")
var winner = document.querySelector("#winner")

button1.addEventListener("click", function() {

    var limit = document.querySelector("#limit").value
    score1 ++;
    p1s.innerHTML = score1

    if (score1 >= limit) {

        p1s.style.color = "green";
        button1.setAttribute("disabled", "true");
        button2.setAttribute("disabled", "true");

        printWinner()
    }
})

button2.addEventListener("click", function() {

    var limit = document.querySelector("#limit").value
    score2 ++;
    p2s.innerHTML = score2

    if (score2 >= limit) {

        p2s.style.color = "green";
        button1.setAttribute("disabled", "true");
        button2.setAttribute("disabled", "true");

        printWinner()
    }
})

reset.addEventListener("click", function() {

    button1.removeAttribute("disabled");
    button2.removeAttribute("disabled");

    score1 = 0
    score2 = 0

    p1s.innerHTML = score1
    p2s.innerHTML = score2

    p1s.style.color = "whitesmoke"
    p2s.style.color = "whitesmoke"

    winner.innerHTML = ""

    document.querySelector("#limit").value = "5"
})

function printWinner () {
    
    if (score1 > score2) {
        winner.innerHTML = "Player 1"
    } else {
        winner.innerHTML = "Player 2"
    }
}