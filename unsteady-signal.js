// const unsteadySignal = (timeout) => {
//   console.log(timeout);

//   setTimeout(() => {
//     unsteadySignal(timeout * 2);
//   }, timeout);
// };

const unsteadySignal = (timeout) => {
  console.log("hii");

  const newTimeout = 300 + Math.round(Math.random() * 500);
  setTimeout(() => {
    console.clear();
    unsteadySignal(newTimeout);
  }, timeout);
};

// unsteadySignal(5000);

const startTimer = (timeEnd) => {
  let timeLeft = timeEnd;
  const timer = setInterval(() => {
    console.log(timeLeft);
    timeLeft -= 1;
  }, 1000);

  setTimeout(() => {
    console.log("boom");
    clearInterval(timer);
  }, 1000 + timeEnd * 1000);
};

// startTimer(-2);

const mySetInterval = function (func_ref, delay, ...args) {
  func_ref.apply(null, args);

  setTimeout(() => mySetInterval(func_ref, delay, ...args), delay);
};

// mySetInterval((text) => console.log(text), 1000, "hello");

const spinner = () => {
  const signs = "\\|/-";
  let index = 0;
  setInterval(() => {
    console.clear();
    const currentSign = signs[index % signs.length];
    console.log(currentSign);
    index++;
  }, 100);
};

// spinner();

const randomDigitGenerator = () => {
  return Math.floor(Math.random() * 10);
};

const isEven = (x) => x % 3 === 0;

const greeting = () => console.log("hello");

const nestedTimeout = () => {
  setInterval(() => {
    console.log("outer");
    setTimeout(() => {
      console.log("1st inner");
      setTimeout(() => {
        console.log("2nd inner");
        setTimeout(() => console.log("innermost"), 3000);
      }, 2000);
    }, 1000);
  }, 500);
};

//nestedTimeout();

