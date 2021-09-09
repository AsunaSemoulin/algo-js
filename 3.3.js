let arr = ["First", "Second"];
let duplicateArr = [];
let duplicateArr2 = [];

for (let elem of arr) {
    duplicateArr.push(elem);
}

duplicateArr2 = Array.from(arr);

console.log(duplicateArr);
console.log(duplicateArr2);