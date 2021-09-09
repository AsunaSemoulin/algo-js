const readlineSync = require("readline-sync");

let randomNumber = Math.floor(Math.random() * 100);

let userNumber = new Number(readlineSync.question("Number: "));

while (userNumber != randomNumber) {
    if (userNumber < randomNumber) {
        console.log("Too low");
    } else {
        console.log("Too high");
    }
    userNumber = new Number(readlineSync.question("Number: "));
}

console.log("Well guessed!");