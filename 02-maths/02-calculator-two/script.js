
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let op_one = parseFloat(document.getElementById("op-one").value);
    let op_two = parseFloat(document.getElementById("op-two").value);
    
    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case "addition":
                alert(op_one + op_two);
                break
            case "substraction":
                alert(op_one - op_two);
                break
            case "multiplication":
                alert(op_one * op_two);
                break
            default:
                alert(op_one / op_two);
                break
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
