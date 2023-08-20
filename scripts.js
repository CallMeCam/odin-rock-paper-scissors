// all possible choices for player and computer
const PLAY_CHOICES = ["rock", "paper", "scissors"];

// text to update on page
const playMessage = document.getElementById('play-message');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const currentRound = document.getElementById('round-count');

// variables for storing winner of last round
let winnerMessage;
let winnerNumber;

// track scores and rounds
let playerWins = 0,
    computerWins = 0,
    ties = 0,
    roundCount = 1,
    winner;

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
    
    // check first if it's a tie, then proceed to determine winner
    if (playerSelection === computerSelection) {
        winnerMessage = "It's a tie!";
        winnerNumber = 0;
        ties++;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            winnerMessage = "You lose! Paper beats Rock";
            winnerNumber = 1;
            computerWins++;
        } else if (computerSelection === "scissors") {
            winnerMessage = "You win! Rock beats Scissors";
            winnerNumber = 2;
            playerWins++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winnerMessage = "You lose! Scissors beats Paper";
            winnerNumber = 1;
            computerWins++;
        } else if (computerSelection === "rock") {
            winnerMessage = "You win! Paper beats Rock";
            winnerNumber = 2;
            playerWins++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            winnerMessage = "You lose! Rock beats Scissors";
            winnerNumber = 1;
            computerWins++;
        } else if (computerSelection === "paper") {
            winnerMessage = "You win! Scissors beats Paper";
            winnerNumber = 2;
            playerWins++;
        }
    }

    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    console.log("Round " + roundCount +" played");
    console.log("Player choice: " + playerSelection);
    console.log("Computer choice: " + computerSelection);
    console.log(winnerMessage);
    return [winnerNumber, winnerMessage];
};

const resetScores = function () {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
    roundCount = 1;
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    currentRound.textContent = 0;
    console.log("Scores reset");
}

const displayWinner = function () {
    if (playerWins == computerWins) {
        winner = "Game Over! It's a tie.";
    } else if (playerWins > computerWins) {
        winner = "Game Over! You win!";
    } else {
        winner = "Game Over! You lose!";
    }

    return winner;
}

const game = function (playerSelection) {
    
    if (roundCount < 5) {
        playRound(playerSelection, getComputerChoice(PLAY_CHOICES));
        roundCount++;
        currentRound.textContent = roundCount;
        playMessage.textContent = winnerMessage;
    } else {
        // play final round
        playRound(playerSelection, getComputerChoice(PLAY_CHOICES));
        roundCount++;
        playMessage.textContent = winnerMessage;

        // determine and display winner of series, then reset scores for next round
        displayWinner();
        playMessage.textContent = winner;
        resetScores();
    }
}

// adding events to play buttons
const selectionButton = document.getElementsByClassName('selectionButton');
const buttonArray = [...selectionButton];

buttonArray.forEach(button => button.addEventListener('click', (e) => {
    game(button.id);
}));

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', (e) => {resetScores()});
