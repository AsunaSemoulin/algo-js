const readlineSync = require("readline-sync");

let questionsLeft = 3;

let firstName = readlineSync.question("What is your first name? " + "( " + questionsLeft + " questions remaining ) ");
questionsLeft -= 1
let name = readlineSync.question("What is your name? " + "( " + questionsLeft + " questions remaining ) ");
questionsLeft -= 1
let age = Math.floor(new Number(readlineSync.question("How old are you? " + "( " + questionsLeft + " questions remaining ) ")));
questionsLeft -= 1
let pronoun = readlineSync.question("What is your pronoun? " + "( " + questionsLeft + " questions remaining ) ");

console.log("A long time ago, there was " + firstName + " " + name + ", " + pronoun + " was the best person on earth, who died in a card accident at " + age + " and reincarnated as a slime.");