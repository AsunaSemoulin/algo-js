const readlineSync = require("readline-sync");

let favoriteNumber = new Number(readlineSync.question("What is your favorite number? "));

if (favoriteNumber == 42) {
    console.log("Good");
} else {
    while(favoriteNumber != 42) {
        console.log("Are you sure?");
        favoriteNumber = new Number(readlineSync.question("What is your favorite number? "));
    }
    console.log("Good");
}