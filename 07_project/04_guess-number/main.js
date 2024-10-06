let randomNumber = parseInt(Math.random() * 100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let attempt = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")        
    } else if(guess < 1){
        alert("Please enter a number more than 0")
    } else if(guess > 100){
        alert("Please enter a number less than 100")
    } else{
        prevGuess.push(guess)
        if(attempt === 11){
            cleanUpGuess(guess);
            displayMessage(`Game Over`)
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("Your Guess is Right")
    } else if(guess < randomNumber){
        displayMessage("Number is too low")
    } else if(guess > randomNumber){
        displayMessage("Number is too high")
    }
}

function cleanUpGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    attempt++;
    remaining.innerHTML = `${11 - attempt}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('.button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newButton = document.getElementById("#newGame")
    newButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100+1);
        prevGuess = []
        attempt = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - attempt}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}