const readlineSync = require("readline-sync");

/**
 * Calculate the surface
 * @param  {Number} length The length
 * @param  {Number} width The width
 * @return {Number}      The surface
 */
let calcSurface = (length, width) => {
    return length * width
}

let userLength = new Number(readlineSync.question("Length: "));
let userWidth = new Number(readlineSync.question("Width: "));

let result = calcSurface(userLength, userWidth);

console.log(result);