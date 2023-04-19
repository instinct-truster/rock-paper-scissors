let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "ROCK";
  } else if (computerChoice === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toUpperCase();
  const computerChoice = computerSelection.toUpperCase();

  if (playerChoice === computerChoice) {
    return "You Tied!";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    playerScore++;
    return "You won! " + playerChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    return "You lost. " + computerChoice + " beats " + playerChoice;
  }
}

function game() {
  const computerChoice = getComputerChoice();
  const playerChoice = prompt(
    `Select your choice by typing out ROCK, PAPER or SCISSORS.
Player: ${playerScore} | CPU: ${computerScore}`
  );
  const result = playRound(playerChoice, computerChoice);
  console.log(result);
  console.log(playerScore);
  console.log(computerScore);
}

for (let i = 0; i < 5; i++) {
  game();
}

function getWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return "Tie game!";
  } else if (playerScore > computerScore) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

alert(getWinner(playerScore, computerScore));
