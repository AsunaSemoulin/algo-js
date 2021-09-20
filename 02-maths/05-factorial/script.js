
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value
    let num = parseFloat(document.getElementById("number").value);

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        function factorialize(num) {
            if (num < 0) {
                return -1;
            }
              
            else if (num == 0) { 
                return 1;
            }
              
            else {
                return (num * factorialize(num - 1));
            }
        }

        alert(factorialize(num));
    });

})();
