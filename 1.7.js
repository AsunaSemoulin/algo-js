const readlineSync = require("readline-sync");

let shoeSize = Math.floor(new Number(readlineSync.question("What is your shoe size? ")));
let birthYear = Math.floor(new Number(readlineSync.question("What is your birth year? ")));

let result = 0;

result = shoeSize * 2
result += 5;
result *= 50;
result -= birthYear;
result += 1766;

console.log(result);