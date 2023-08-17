// all possible choices for player and computer
const PLAY_CHOICES = ["rock", "paper", "scissors"];

// temporarily set user input to Paper for testing
// don't forget the user input needs to be lowercase
const userInput = "paper";

// get random results from possible choices
const getComputerChoice = function (choices) {

    // generate random number within range of 'choices'
    let randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex]; // return value from 'choices' array at randomly generated index
};

// play a round by comparing the user choice to the computer selection
const playRound = function (playerSelection, computerSelection) {
    // compare values
    // paper beats rock
    // rock beats scissors
    // scissors beats paper

    // string for winner message, and int for winner indicator to be used for score tracking later.
    // 0 = tie or bad input, 1 = player loses, 2 = player wins. this feels clunky but it should work for now
    let winnerMessage;
    let winnerNumber;

    // check that player input is valid
    if (PLAY_CHOICES.includes(playerSelection)) {
        // check first if it's a tie, then proceed to determine winner
        if (playerSelection === computerSelection) {
            winnerMessage = "It's a tie!";
            winnerNumber = 0;
        } else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                winnerMessage = "You lose! Paper beats Rock";
                winnerNumber = 1;
            } else if (computerSelection === "scissors") {
                winnerMessage = "You win! Rock beats Scissors";
                winnerNumber = 2;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                winnerMessage = "You lose! Scissors beats Paper";
                winnerNumber = 1;
            } else if (computerSelection === "rock") {
                winnerMessage = "You win! Paper beats Rock";
                winnerNumber = 2;
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                winnerMessage = "You lose! Rock beats Scissors";
                winnerNumber = 1;
            } else if (computerSelection === "paper") {
                winnerMessage = "You win! Scissors beats Paper";
                winnerNumber = 2;
            }
        }
    } else {
        //if player input is not rock, paper, or scissors, return error message
        winnerMessage = "That's not a valid input. Please try again.";
        winnerNumber = 0;
    }

    // check values for correctness
    //console.log(playerSelection, computerSelection);
    return [winnerNumber, winnerMessage];
};

const game = function () {
    // initialize winner counts to 0
    let playerWins = 0,
        computerWins = 0,
        ties = 0,
        roundCount = 0,
        winner;

    // play a 5-round game
    for (let i = 0; i < 5; i++) {
        // call playRound function and check winner value at array[0]. increment winner count
        // there are probably a million other, better ways to do this
        if (playRound(userInput, getComputerChoice(PLAY_CHOICES))[0] === 1) {
            computerWins++;
            console.log("Computer wins round " + (roundCount+1) + ". Computer: " + computerWins + " Player: " + playerWins);
        } else if (playRound(userInput, getComputerChoice(PLAY_CHOICES))[0] === 2) {
            playerWins++;
            console.log("Player wins round " + (roundCount+1) + ". Computer: " + computerWins + " Player: " + playerWins);
        } else {
            ties++;
            console.log("Round " + (roundCount+1) + " is a tie. Computer: " + computerWins + " Player: " + playerWins);
        }
        roundCount++;
    }

    if (playerWins == computerWins) {
        winner = "It's a tie.";
    } else if (playerWins > computerWins) {
        winner = "You win!";
    } else {
        winner = "You lose!";
    }

    return winner;
}

// get user input and convert to lower case
//let userInput = prompt("Please enter your choice of rock, paper, or scissors: ").toLowerCase();

//console.log(playRound(userInput, getComputerChoice(PLAY_CHOICES)));

console.log(game());
