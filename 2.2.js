const readlineSync = require("readline-sync");

let min = Math.floor(new Number(readlineSync.question("Min? ")));
let max = Math.floor(new Number(readlineSync.question("Max? ")));
let current = Math.floor(new Number(readlineSync.question("Current? ")));

if (min > max) {
    console.log("YOU DON'T UNDERSTAND ANYTHING!");
} else {
    if (current < max && current > min) {
        console.log("Current is between mix and max");
    }
}
