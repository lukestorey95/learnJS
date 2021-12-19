let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const alert = () => {
    if (currentHumanGuess < 0 || currentHumanGuess > 9) {
        alert("Please make sure your guess is between 0 and 9");
    }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
}

const advanceRound = () => currentRoundNumber ++;