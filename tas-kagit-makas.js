let humanScore = 0, computerScore = 0, round = 0;

function getComputerChoise() {

    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const prompt = require("prompt-sync")({ sigint: true });
    let humanChoice = prompt("Rock, Paper or Scissors wright your choice... ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log ('Your choice is same with computer choice');
    }
    else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log ( `You win! ${humanChoice.toLowerCase()}  beats ${computerChoice}`);
    } else {

        computerScore++;
        console.log(`You lost! ${computerChoice}  beats ${humanChoice.toLowerCase()}`);
    }
}

function playGame() { 

    while (round < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoise()
        playRound(humanChoice, computerChoice);
        round++;
        console.log(`Round ${round}: You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore > computerScore){

        console.log(`Congratulations! You won the game! Computer: ${computerScore}, you: ${humanScore}` );
    } else {

        console.log(`Sorry, you lost the game. Computer: ${computerScore}, you: ${humanScore}`);
    }
}

playGame();