// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let n1 = Math.floor(Math.random() * 100);
        let n2 = Math.floor(Math.random() * 100);
        let n3 = Math.floor(Math.random() * 100);
        let n4 = Math.floor(Math.random() * 100);
        let n5 = Math.floor(Math.random() * 100);
        let n6 = Math.floor(Math.random() * 100);
        let n7 = Math.floor(Math.random() * 100);
        let n8 = Math.floor(Math.random() * 100);
        let n9 = Math.floor(Math.random() * 100);
        let n10 = Math.floor(Math.random() * 100);

        let arr = [];
        arr[0] = n1;
        arr[1] = n2;
        arr[2] = n3;
        arr[3] = n4;
        arr[4] = n5;
        arr[5] = n6;
        arr[6] = n7;
        arr[7] = n8;
        arr[8] = n9;
        arr[9] = n10;

        document.getElementById("n-1").innerHTML = arr[0];
        document.getElementById("n-2").innerHTML = arr[1];
        document.getElementById("n-3").innerHTML = arr[2];
        document.getElementById("n-4").innerHTML = arr[3];
        document.getElementById("n-5").innerHTML = arr[4];
        document.getElementById("n-6").innerHTML = arr[5];
        document.getElementById("n-7").innerHTML = arr[6];
        document.getElementById("n-8").innerHTML = arr[7];
        document.getElementById("n-9").innerHTML = arr[8];
        document.getElementById("n-10").innerHTML = arr[9];

        document.getElementById("min").innerHTML = Math.min(...arr);
        document.getElementById("max").innerHTML = Math.max(...arr);

        let sum = arr.reduce((a, b) => a + b, 0);
        let avg = sum / arr.length;

        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = avg;
    })

})();
