let division = (n) => {
    let divisors = [];

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
            if (i != n / i) {
                divisors.push(n / i);
            }
        }
    }

    return divisors;
}

console.log(division(10));