let choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice = prompt("Do you choose Rock, Paper, or Scissors?")
let computerScore;
let playerScore;

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("Computer chose " + computerChoice);
    return(computerChoice);
}

function playGame(playerChoice, computerChoice) {
    
    if (computerChoice==="rock" && playerChoice.toUpperCase()==="SCISSORS") {
        console.log("You win!");
    } else {
        console.log("You lose");
    }
}

getComputerChoice();
playGame(playerChoice, computerChoice);



/*
Welcome screen
Computer chooses random RPS
Person clicks button to choose RPS
Compare the two answers
Determine winner based on RPS rules of order
Add point for winner
Announce result for this round on screen
Loop and add points for winner
After 5 rounds, declare ultimate winner based on points
(Or whoever gets 3 points first is winner)
Click restart button to try again
*/