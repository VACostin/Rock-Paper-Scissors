function getComputerChoice() {
  const ROCK_PAPER_SCIS = ["ROCK", "PAPER", "SCISSORS"];
  const computer_roll = Math.floor(Math.random() * 3);
  return ROCK_PAPER_SCIS[computer_roll];
}

function gameON(playerSelection, computerSelection) {
  const ROCK_PAPER_SCIS = ["ROCK", "PAPER", "SCISSORS"];
  playerSelection = playerSelection.toUpperCase();
  if (ROCK_PAPER_SCIS.includes(playerSelection)) {
    //I haven't done this for fancy reasons, I just want run through a switch and the ? : thing"
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
}

let ongoing = true;
let playerScore = 0;
let computerScore = 0;
while (ongoing) {
  const computerChoice = getComputerChoice();
  const playerChoice = prompt();
  switch (gameON(playerChoice, computerChoice)) {
    case "win": playerScore++;
      console.log("Computer chose " + computerChoice + ". Player wins this round!");
      break;
    case "loss": computerScore++;
      console.log("Computer chose " + computerChoice + ". Computer wins this round!");
      break;
    default: break;
  }
  if (playerScore == 5) {
    console.log("Humaniy wins");
    ongoing = false;
  }
  else if (computerScore == 5) {
    console.log("AI wins");
    ongoing = false;
  }
}