// Name: Hans Burgos
// Takeaways: for the function playRound, I wonder if there is a way to 
// minimize the use of console.log and the use of if statements.

let humanScore = 0;     // Initializes User's Score
let computerScore = 0;  // Initializes Computer's Score

playGame();             // Calls function to start the game

// Prompts the user to pick either Rock, Paper, or Scissors
// converts user input to lowercase making inputs case insensitive
// returns int value based on user input
function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors");
    let lowerCaseUserChoice = userChoice.toLowerCase();
    let finalUserChoice = 0
    if (lowerCaseUserChoice == "rock") {
        finalUserChoice = 1
    } else if (lowerCaseUserChoice == "paper") {
        finalUserChoice = 2
    } else if (lowerCaseUserChoice == "scissors") {
        finalUserChoice = 3
    } else {
        console.log("Invald Choice!")
    }
    return finalUserChoice;
}
// console.log(getHumanChoice());

// Since .random is between 0-1, multiplying by 3 made it easier to compare 
// if statements checks to see if .random is between 0-3
// returns int value based on computer choice in random number
function getComputerChoice() {
    let max = 3;
    let randomNumber = Math.random() * max;

    if (randomNumber <= 1) {
        computerChoice = 1
    } else if (randomNumber <= 2) {
        computerChoice = 2
    } else if (randomNumber <= 3) {
        computerChoice = 3
    }
    return computerChoice;
}
// console.log(getComputerChoice());

// compares int values returned from getHumanChoice() and getComputerChoice()
// either humand or computer score is incremented based on who wins
// param: humanChoice grabs returned value of the function getHumanChoice()
// param: compChoice grabs returned value of the function getComputerChoice()
function playRound(humanChoice, compChoice) {
    if (humanChoice == 1 && compChoice == 1) {
        console.log("tie")
        // tie
    } else if (humanChoice == 1 && compChoice == 2) {
        console.log("human wins")
        humanScore++;
        // human wins
    } else if (humanChoice == 1 && compChoice == 3) {
        console.log("computer wins")
        computerScore++;
        // computer wins
    }

    if (humanChoice == 2 && compChoice == 1) {
        console.log("computer wins")
        computerScore++;
        // computer wins
    } else if (humanChoice == 2 && compChoice == 2) {
        console.log("tie")
        // tie
    } else if (humanChoice == 2 && compChoice == 3) {
        console.log("human wins")
        humanScore++;
        // human wins
    }

    if (humanChoice == 3 && compChoice == 1) {
        console.log("human wins")
        humanScore++;
        // human wins
    } else if (humanChoice == 3 && compChoice == 2) {
        console.log("computer wins")
        computerScore++;
        // computer wins
    } else if (humanChoice == 3 && compChoice == 3) {
        console.log("tie")
        // tie
    }
}

// function playRound() loops for 5 rounds 
// final score is outputed to user
// if statements presents to user the winner
function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Final score between human and computer is ${humanScore} and ${computerScore}`);

    if (humanScore < computerScore) {
        console.log("AI will now take over the world!!!")
    } else if (humanScore > computerScore) {
        console.log("Human wins, for now...")
    } else if (humanScore == computerScore) {
        console.log("Looks like there's a tie, refresh the page to play again.")
    }
}

// Odin Project Rock, Paper, Scissors Project.