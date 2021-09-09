const readlineSync = require("readline-sync");

let firstNumber = Math.floor(new Number(readlineSync.question('First Number: ')));
let secondNumber = Math.floor(new Number(readlineSync.question('Second Number: ')));

let total = firstNumber % secondNumber;

console.log(total);