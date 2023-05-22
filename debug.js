let count = 0

//setInterval(() => {
//   console.log(
//   'hello');
//   count += 2;
//   }, 2000);

// setInterval(() => console.log('hii'), 3000)

//console.log('sync');

const add = (a, b) => {
for (let i = 0 ; i< 10; i++) {}
  return a + b;
} 

const arithmetic = (fn, ...args) => {
  const k = fn.apply(null, args)
  console.log(k);
}

arithmetic(add, 7, 9)