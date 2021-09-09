let fibonacci = (num) => {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

let fibonacciN = (n) => {
    let result = [];

    for (let y = 0; y < n; y++) {
        result.push(fibonacci(y));
    }

    return result;
}

console.log(fibonacciN(6));