/**
 * Give a random number between 1 and 1
 * @return {Number}      The random number between 1 and 10
 */
let rand10 = () => {
    return Math.floor(Math.random()*10);
}

let result = rand10();

console.log(result)