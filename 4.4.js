/**
 * Calculate the average of an array
 * @param  {Array} arr The array
 * @return {Number}      The result
 */
let average = (arr) => {
    let average = arr.reduce( ( a, b ) => a + b, 0 ) / arr.length;

    return average;
}

/**
 * Calculate the min of an array
 * @param  {Array} arr The array
 * @return {Number}      The result
 */
let min = (arr) => {
    return Math.min.apply(Math, arr);
}

/**
 * Calculate the max of an array
 * @param  {Array} arr The array
 * @return {Number}      The result
 */
let max = (arr) => {
    return Math.max.apply(Math, arr);
}

let arr = [4, 4, 5, 6, 6];

console.log(average(arr));
console.log(min(arr));
console.log(max(arr));