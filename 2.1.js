const readlineSync = require("readline-sync");

let age = Math.floor(new Number(readlineSync.question("How old are you? ")));

if (age >= 18) {
    console.log("You are an adult.")
} else {
    console.log("You are not yet an adult.")
}