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
    winningNum = getRandomNum(min, max),
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

//play again event listerner
game.addEventListener('mousedown', function(e){
    if(className === 'play-again'){
        window.location.reload()
    }
    
})

//listen for guess

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)

    //validate the input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red')
    }

    //check if won
    if(guess === winningNum){
        //game over  - won
        gameOver(true, `${winningNum} is correct!, YOU WIN`)
    }else{
        //wrong number
        guessesLeft -= 1; //same as doing guessesLeft = guessesLeft - 1
        if(guessesLeft === 0){
            //game over - lost
            gameOver(false, `game Over, you lost. The correct number was ${winningNum}`)
        }else{
            //change border color
            guessInput.style.borderColor = 'red'

            //clear Input
            guessInput.value = '';

            //game continues, answer wrong
            setMessage(`${guess} is not correct ${guessesLeft} guesses left` ,  'red')
        }
    }
})

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red'

    guessInput.disabled = true
    //change border color
    guessInput.style.borderColor = color

    //set text color
    message.style.color = color
    //set message
    setMessage(msg)

    //play again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

function getRandomNum(min, max){
    //Math.floor(Math.random()*(max-min+1)+min) // generates random numbers between 
    return Math.floor(Math.random()*(max-min+1)+min)
}

//set message
function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}