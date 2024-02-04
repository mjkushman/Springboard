function guessingGame() {
  const goal = Math.floor(Math.random() * 100);
  let guessCount = 0
  let hasWon = false;
  return function (guess) {
    // accepts a number guess
    while (!hasWon) {
        guessCount++
        if (guess > goal && !hasWon) {
        return `${guess} is too high!`;
      }
      if (guess < goal) {
        return `${guess} is too low!`;
      }
      if (guess == goal) {
        hasWon = true;
        return `You win! You found ${goal} in ${guessCount} guesses.`;
      }
    }
    return "The game is over, you already won!";
  };
}

module.exports = guessingGame;
