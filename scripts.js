// all possible choices for player and computer
const playChoices = ["rock", "paper", "scissors"];

// get random results from possible choices
const getComputerChoice = function (choices) {

    // generate random number within range of 'choices'
    let randomIndex = Math.floor(Math.random() * choices.length);

    // return value from 'choices' array at randomly generated index
    return choices[randomIndex];
};

// play a round by comparing the user choice to the computer selection
const playRound = function (playerSelection, computerSelection) {
    // compare values
    // paper beats rock
    // rock beats scissors
    // scissors beats paper
    let winnerMessage;

    // check that player input is valid
    if (playChoices.includes(playerSelection)) {
        // check first if it's a tie, then proceed to determine winner
        if (playerSelection === computerSelection) {
            winnerMessage = "It's a tie!";
        } else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                winnerMessage = "You lose! Paper beats Rock";
            } else if (computerSelection === "scissors") {
                winnerMessage = "You win! Rock beats Scissors";
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                winnerMessage = "You lose! Scissors beats Paper";
            } else if (computerSelection === "rock") {
                winnerMessage = "You win! Paper beats Rock";
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                winnerMessage = "You lose! Rock beats Scissors";
            } else if (computerSelection === "paper") {
                winnerMessage = "You win! Scissors beats Paper";
            }
        }
    } else {
        //if player input is not rock, paper, or scissors, return error message
        winnerMessage = "That's not a valid input. Please try again.";
    }

    // check values for correctness
    //console.log(playerSelection, computerSelection);

    return winnerMessage;
};

// get user input and convert to lower case
let userInput = prompt("Please enter your choice of rock, paper, or scissors: ").toLowerCase();

console.log(playRound(userInput, getComputerChoice(playChoices)));
