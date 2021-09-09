const readlineSync = require("readline-sync");

let number = new Number(readlineSync.question("Enter a number between 1 and 7: "));

if (number == 1) {
    console.log("Monday");
}
else if (number == 2) {
    console.log("Tuesday");
}
else if (number == 3) {
    console.log("Wednesday");
}
else if (number == 4) {
    console.log("Thursday");
}
else if (number == 5) {
    console.log("Friday");
}
else if (number == 6) {
    console.log("Saturday");
}
else {
    console.log("Sunday");
}