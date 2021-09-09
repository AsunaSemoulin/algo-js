/**
 * Calculate the distance between a and b
 * @param  {Array} a a coordinates
 * @param  {Array} b b coordinates
 * @return {Number}      The result
 */
let calcDistance = (a, b) => {
    let a2 = a[1];
    let a1 = a[0];

    let b2 = b[1];
    let b1 = b[0];

    let result = Math.hypot(a2-b2, a1-b1)
    return result;
}

console.log(calcDistance([1, 1], [3, 1]));