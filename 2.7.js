const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("n: "));
let result = 0

for (let a = 1; a <= n; a++) {
    newN = new Number(readlineSync.question("n: "));
    result += newN;
}

console.log(result);