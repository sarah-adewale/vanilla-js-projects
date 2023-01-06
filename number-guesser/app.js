/*
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify player of the guesses remaining
- notify the player of the correct answer if loose
- let the player choose  to play again
*/

//game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;
