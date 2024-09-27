let humanScore = 0, computerScore = 0, round = 0;
let computerChoice, result, score, roundText;

function getComputerChoice() {

    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result = 'Your choice is same with computer choice';
    }
    else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        result = `You win! ${humanChoice.toLowerCase()}  beats ${computerChoice}`;
    } else {

        computerScore++;
        result = `You lost! ${computerChoice}  beats ${humanChoice.toLowerCase()}`;
    }
}

function playGame(humanChoice) {
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    roundText = `Round ${round}: You: ${humanScore}, Computer: ${computerScore}`;

    if (round >= 5) { 
        if (humanScore > computerScore) {
            score = `Congratulations! You won the game! Computer: ${computerScore}, You: ${humanScore}`;
        } else if (humanScore < computerScore) {
            score = `Sorry, you lost the game. Computer: ${computerScore}, You: ${humanScore}`;
        } else {
            score = `It's a draw! Computer: ${computerScore}, You: ${humanScore}`;
        }

        humanScore = 0;
        computerScore = 0;
        round = 0;
    }
}