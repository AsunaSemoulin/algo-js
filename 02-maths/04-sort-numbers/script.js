// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value
    let arr = (document.getElementById("numbers").value).split(", ");

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        alert(arr.sort((a, b) => a - b));
    });

})();
