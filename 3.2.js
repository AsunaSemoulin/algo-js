let arr1 = [1, 2, 3, 4, 5];
let resultArr1 = 0;
let avgArr1 = 0;

let arr2 = [100, 101, 102];
let resultArr2 = 0;
let avgArr2 = 0;

for (let elem of arr1) {
    resultArr1 += elem;
}

avgArr1 = resultArr1 / arr1.length;

for (let elem of arr2) {
    resultArr2 += elem;
}

avgArr2 = resultArr2 / arr2.length;

console.log(avgArr1);
console.log(avgArr2);