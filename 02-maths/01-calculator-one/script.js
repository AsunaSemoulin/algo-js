
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let op_one = parseFloat(document.getElementById("op-one").value);
    let op_two = parseFloat(document.getElementById("op-two").value);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(op_one + op_two);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(op_one - op_two);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(op_one * op_two);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(op_one / op_two);
    });
})();
