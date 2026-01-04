const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("result-text");
const moves = document.getElementById("moves");
const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playRound(playerChoice, computerChoice);
  });
});

function playRound(player, computer) {
  moves.textContent = `You chose ${player} • Computer chose ${computer}`;

  if (player === computer) {
    resultText.textContent = "It's a Draw 😐";
    return;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    resultText.textContent = "You Win 🎉";
    playerScore++;
  } else {
    resultText.textContent = "Computer Wins 🤖";
    computerScore++;
  }

  updateScore();
}

function updateScore() {
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}
 