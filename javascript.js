function getComputerChoice() {
  const ROCK_PAPER_SCISSORS = ["ROCK", "PAPER", "SCISSORS"];
  const computerRoll = Math.floor(Math.random() * ROCK_PAPER_SCISSORS.length);
  return ROCK_PAPER_SCISSORS[computerRoll];
}

function updateResultText(playerSelection, computerSelection) {
  return `Computer played: ${computerSelection}. Player played: ${playerSelection}`;
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

function resetScoresAndDisplays() {
  playerScore = 0;
  computerScore = 0;
  playerDisplay.textContent = playerScore;
  computerDisplay.textContent = computerScore;
  whoWins.textContent = "";
  computerVSplayer.textContent = "";
}

function checkGameOver() {
  if (playerScore >= 5) {
    alert("Player wins");
    resetScoresAndDisplays();
  } else if (computerScore >= 5) {
    alert("Computer wins");
    resetScoresAndDisplays();
  }
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const resultText = updateResultText(playerSelection, computerSelection);
  computerVSplayer.textContent = resultText;

  const result = playerSelection.localeCompare(computerSelection);
  switch (result) {
    case 0:
      return "tie";
    case 1:
      return playerSelection + computerSelection === "SCISSORSPAPER" ? "player" : "computer";
    case -1:
      return playerSelection + computerSelection === "PAPERSCISSORS" ? "computer" : "player";
  }
}

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.getElementById("PlayerScore");
const computerDisplay = document.getElementById("MachineScore");
const whoWins = document.getElementById("WhoWins");
const computerVSplayer = document.getElementById("Result");

function handleButtonClick(button) {
  const playerChoice = button.innerText;
  const winner = playRound(playerChoice);

  updateScores(winner);
  playerDisplay.textContent = playerScore;
  computerDisplay.textContent = computerScore;

  if (playerScore === computerScore) {
    whoWins.textContent = "It's a tie";
  } else {
    whoWins.textContent = `${winner.charAt(0).toUpperCase() + winner.slice(1)} Wins`;
  }

  checkGameOver();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    handleButtonClick(button);
  });
});