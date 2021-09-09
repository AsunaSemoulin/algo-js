let arr1 = [1, 2, 3, 4, 5];
let resultArr1 = 0;

let arr2 = [100, 101, 102];
let resultArr2 = 0;

for (let elem of arr1) {
    resultArr1 += elem;
}

for (let elem of arr2) {
    resultArr2 += elem;
}

console.log(resultArr1);
console.log(resultArr2);