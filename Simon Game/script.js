let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let start = false;

function playSound(sound) {
    let audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");

    setTimeout(function() {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    level++;
    $("h1").text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);

    userClickedPattern = [];
}

function startOver() {
    start = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];

    $("h1").text(`Gem Over ! Press any Key to Start`);

    $("body").addClass("game-over");
    playSound("wrong");

    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
}

function checkAnswer(index) {

    if (gamePattern[index] === userClickedPattern[index]) {
        if (index === level - 1) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        startOver();
    }
}

$(".btn").click(handlerFunction);

function handlerFunction() {
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);

    playSound(userChosenColor);
    animatePress(userChosenColor);
}

$(document).keypress(function() {
    if (start === false) {
        start = true;
        nextSequence();
    }
});