
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    for (let a = 1; a <= 100; a++) {
        if (a % 3 == 0) {
            console.log("fizz");
        }
        else if (a % 5 == 0) {
            console.log("buzz");
        }
        else if (a % 5 == 0 && a % 3 == 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log("fizzbuzz");
        }
    }
})();
