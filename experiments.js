// let n = 0;

// for (let count = 0; count < 5; count++) {
//   setTimeout(() => {
//     console.log(n);
//     n++;
//   }, 1000 * count);
// }

// const bomb = (second) => {
//   console.log(second);

//   setTimeout(() => {
//     if (second === 1) {
//       console.log("Boom");
//       return;
//     }

//     bomb(second - 1);
//   }, 1000);
// };

const timer = (second) => {
  console.log(second);

  const bomb = () => {
    if (second === 1) {
      console.log("BOOOOOOOOOOOOOOOOOOM");
      return;
    }

    timer(second - 1);
  };

  setTimeout(bomb, 1000);
};

//timer(5);

//bomb(5);

const fs = require("fs");
const { type } = require("os");

const typeRacer = () => {
  let totalTime = 0;
  let speed = 0;
  setInterval(() => {
    let line = fs.readFileSync("./numbers.txt", "utf-8");
    let wordsTyped = line.trim().split(" ");
    speed = Math.floor(wordsTyped.length / totalTime);
    console.clear();
    console.log(speed);
    totalTime += 2 / 60;
  }, 2000);
};

typeRacer();
