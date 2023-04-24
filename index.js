let choices = ["rock", "paper", "scissors"];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return(computerChoice);
}

function win() {
    console.log("You win!");
    playerScore++;
}

function tie() {
    console.log("Tie");    
}

function lose() {
    console.log("You lose :'(");
    computerScore++;
}


function playGame(playerChoice, computerChoice) {

    playerChoice = prompt("Do you choose Rock, Paper, or Scissors?")
    console.log("You chose " + playerChoice);
    console.log("Computer chose " + computerChoice);

    if (computerChoice==="rock") {
        if (playerChoice.toUpperCase()==="SCISSORS") {
            win();
        } else if (playerChoice.toUpperCase()==="ROCK") {
            tie();
        } else if (playerChoice.toUpperCase()==="PAPER") {
            lose();
        } else {
            console.log("Please enter a valid choice")
        }
    } else if (computerChoice==="paper") {
        if (playerChoice.toUpperCase()==="SCISSORS") {
            win();
        } else if (playerChoice.toUpperCase()==="ROCK") {
            lose();
        } else if (playerChoice.toUpperCase()==="PAPER") {
            tie();
        } else {
            console.log("Please enter a valid choice")
        }
    } else if (computerChoice==="scissors") {
        if (playerChoice.toUpperCase()==="SCISSORS") {
            tie();
        } else if (playerChoice.toUpperCase()==="ROCK") {
            win();
        } else if (playerChoice.toUpperCase()==="PAPER") {
            lose();
        } else {
            console.log("Please enter a valid choice")
        }
    } else {
        console.log("Something went horribly wrong")
    }

    console.log("SCORE  You: " + playerScore + "    Computer: " + computerScore)

}

getComputerChoice();
playGame(playerChoice, computerChoice);
getComputerChoice();
playGame(playerChoice, computerChoice);
getComputerChoice();
playGame(playerChoice, computerChoice);
getComputerChoice();
playGame(playerChoice, computerChoice);
getComputerChoice();
playGame(playerChoice, computerChoice);



/*
Welcome screen
ーComputer chooses random RPS
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