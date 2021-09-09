/**
 * Give a random number between 1 and 1
 * @return {Number}      The random number between 1 and 10
 */
 let rand10 = () => {
    return Math.floor(Math.random()*10);
}

/**
 * Generate a list of n random numbers between 1 and 10
 * @param  {Number} n Number
 * @return {Array}      An array of random numbers between 1 and 10
 */
let multiRand = (n) => {
    let arr = [];
    
    for (let a = 0; a < n; a++) {
        number = rand10();
        arr.push(number);
    }

    return arr
}

console.log(multiRand(2));