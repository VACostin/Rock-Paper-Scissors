function getComputerChoice() {
  const ROCK_PAPER_SCIS = ["ROCK", "PAPER", "SCISSORS"];
  const computer_roll = Math.floor(Math.random() * 3);
  return ROCK_PAPER_SCIS[computer_roll];
}

function playRound(playerSelection) {
  //I haven't done this for fancy reasons, I just want run through a switch and the ? : thing"
  let computerSelection = getComputerChoice();
  let result = playerSelection.localeCompare(computerSelection);
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

buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerChoice = button.innerText;
    let result = playRound(playerChoice);
    switch (result) {
      case "win": playerScore++;
      playerDisplay.textContent = playerScore;
        break;
      case "loss": computerScore++;
      computerDisplay.textContent = computerScore;
        break;
      default: break;
    }
  });
});
