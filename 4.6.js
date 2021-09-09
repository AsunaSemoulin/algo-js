let factorial = (a) => {
    var i, a, f = 1;

    for(i = 1; i <= a; i++) {
        f = f * i
    }

    return f;
}

console.log(factorial(3));