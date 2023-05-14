function getComputerChoice() {
  const ROCK_PAPER_SCIS = ["ROCK", "PAPER", "SCISSORS"];
  const computer_roll = Math.floor(Math.random() * 3);
  return ROCK_PAPER_SCIS[computer_roll];
}

function playRound(playerSelection) {
  //I haven't done this for fancy reasons, I just want run through a switch and the ? : thing"
  let computerSelection = getComputerChoice();
  let result = playerSelection.localeCompare(computerSelection);
  let resultText = "Computer played: " + computerSelection + ". Player played: " + playerSelection;
  computerVSplayer.textContent = resultText;
  switch (result) {
    case 0:
      return "tie";
    case 1:
      return (playerSelection + computerSelection == "SCISSORSPAPER" ? "win" : "loss");
    case -1:
      return (playerSelection + computerSelection == "PAPERSCISSORS" ? "loss" : "win");
  }
}

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.getElementById("PlayerScore");
const computerDisplay = document.getElementById("MachineScore");
const whoWins = document.getElementById("WhoWins");
const computerVSplayer = document.getElementById("Result");

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerChoice = button.innerText;
    let result = playRound(playerChoice);
    switch (result) {
      case "win": playerScore++;
        playerDisplay.textContent = playerScore;
        whoWins.textContent = "Player Wins";
        if (playerScore >= 5) {
          alert("Player wins");
          playerScore = 0;
          computerScore = 0;
          playerDisplay.textContent = playerScore;
          computerDisplay.textContent = computerScore;
          whoWins.textContent = "";
          computerVSplayer.textContent = "";
        }
        break;
      case "loss": computerScore++;
        computerDisplay.textContent = computerScore;
        whoWins.textContent = "Computer Wins";
        if (computerScore >= 5) {
          alert("Computer wins");
          playerScore = 0;
          computerScore = 0;
          playerDisplay.textContent = playerScore;
          computerDisplay.textContent = computerScore;
          whoWins.textContent = "";
          computerVSplayer.textContent = "";
        }
        break;
      default: whoWins.textContent = "It's a tie";
        break;
    }
  });
});
