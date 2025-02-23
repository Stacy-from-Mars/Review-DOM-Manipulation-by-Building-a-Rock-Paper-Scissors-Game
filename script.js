function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;


function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = getRoundResults(userOption);
    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
        optionsContainer.style.display = "none";
        resetGameBtn.style.display = "block"
    }
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = "";
}

resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});

paperBtn.addEventListener("click", function () {
    showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});