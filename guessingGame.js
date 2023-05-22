const actualNumber = 5;
let chancesLeft = 5;

const winningMessage = () => console.log("Congratulations!!!!");
const lossingMessage = () => console.log("Try Again");
const isCorrectGuess = (guess) => actualNumber == guess;
const noChancesLeft = () => chancesLeft === 0;

const onGuess = (guess, interval) => {
  if (isCorrectGuess(guess)) {
    clearInterval(interval);
    return winningMessage(guess);
  }

  chancesLeft--;

  if (noChancesLeft()) {
    clearInterval(interval);
    return lossingMessage();
  }
};

const readInput = (onData, onEnd) => {
  const interval = setInterval(() => {
    process.stdin.setEncoding("utf-8");
    const data = process.stdin.read();

    if (data) {
      onData(data, interval);
      if (onEnd(data)) clearInterval(interval);
    }
  }, 500);
};

const main = () => {
  readInput(onGuess);
};

main();

// watchInput((guess) => game.guess(guess))
