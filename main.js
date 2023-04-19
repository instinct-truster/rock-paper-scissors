let warriorScore = 0;
let smaugScore = 0;

function getSmaugChoice() {
  let smaugChoice = Math.floor(Math.random() * 3);
  if (smaugChoice === 0) {
    return "ROCK";
  } else if (smaugChoice === 1) {
    return "PAPER";
  }
  return "SCISSORS";
}

function getWarriorChoice() {
  const warriorChoice = prompt(
    `Please type out your choice of either ROCK, PAPER, or SCISSORS"
  Warrior's Score: ${warriorScore} |||  Smaug's Score: ${smaugScore}`
  );
  if (warriorChoice === null) {
    return "";
  }
  return warriorChoice.toUpperCase();
}

function playMatch() {
  const warriorChoice = getWarriorChoice();
  const smaugChoice = getSmaugChoice();

  if (warriorChoice === smaugChoice) {
    alert("Match tied, no score change.");
  } else if (
    (warriorChoice === "ROCK" && smaugChoice === "SCISSORS") ||
    (warriorChoice === "PAPER" && smaugChoice === "ROCK") ||
    (warriorChoice === "SCISSORS" && smaugChoice === "PAPER")
  ) {
    warriorScore++;
    alert(`Warrior Wins! Warrior: ${warriorScore} ||| Smaug ${smaugScore}`);
  } else if (
    (warriorChoice === "SCISSORS" && smaugChoice === "ROCK") ||
    (warriorChoice === "ROCK" && smaugChoice === "PAPER") ||
    (warriorChoice === "PAPER" && smaugChoice === "SCISSORS")
  ) {
    smaugScore++;
    alert(
      `Smaug Wins! Warrior's Score: ${warriorScore} ||| Smaug's Score ${smaugScore}`
    );
  } else {
    alert("Invalid entry, please try again.");
  }

  if (warriorScore === 4) {
    alert("Warrior needs only one more to win!");
  }
  if (smaugScore === 4) {
    alert("Smaug needs only one more to win!");
  }
  if (warriorScore === 5) {
    alert(
      "Congratulations! You may now take one item of treasure and leave with your life.  (Please refresh page if you'd like to try again."
    );
    return;
  }

  if (smaugScore === 5) {
    alert(
      "Bring some salt and pepper, we're having Roasted Warrior for lunch!  (please refresh page if you'd like to try again.)"
    );
    return;
  }

  playMatch();
}

alert(`WELCOME TO "ESCAPE FROM SMAUG'S LAIR!"`);

alert("First challenger to score 5 will be crowned the winner.");

alert(
  "Will you get to leave with the item of your choice, or will you be lunch?"
);

playMatch();
