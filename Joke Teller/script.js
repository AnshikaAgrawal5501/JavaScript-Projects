const startButton = document.getElementById('start-button');
const audio = document.getElementById('audio');

const tellJoke = () => {

    startButton.disabled = true;

    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        .then(async(response) => {

            const data = await response.json();
            const joke = `${data.setup} ................................ ${data.delivery}`;

            audio.setAttribute('src', `http://api.voicerss.org/?key=${config.API_KEY}&hl=en-us&src=${joke}`);
            audio.play();
            console.log(joke);

        }).catch((error) => {
            console.log(error);
        });
}

audio.addEventListener('ended', () => {
    startButton.disabled = false;
})

startButton.addEventListener('click', tellJoke);