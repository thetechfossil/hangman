import Hangman from "./app";
import getPuzzle from "./api";

const domHangman = document.querySelector('#word');
const domRemain = document.querySelector('#remain');
let game;

const render = () => {
    domHangman.innerHTML = '';
    domRemain.textContent = game.getStatusMessage();

    game.getPuzzle().split('').forEach(letter => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;
        domHangman.appendChild(letterEl);
    });
};

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
   render();
});

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    render();
};

document.querySelector('#reset').addEventListener('click',startGame);

startGame();