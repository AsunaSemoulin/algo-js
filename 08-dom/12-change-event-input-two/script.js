// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {
    // your code here
    document.getElementById("pass-one").addEventListener("keyup", (e) => {
        let validity = document.getElementById("validity");
        let pass = document.getElementById("pass-one").value;

        if (pass.length >= 8) {
            let num = 0;

            for (let elem of pass.split("")) {
                if (elem == "0" || elem == "1" || elem == "2" || elem == "3" || elem == "4" || elem == "5" || elem == "6" || elem == "7" || elem == "8" || elem == "9") {
                    num += 1;
                }
            }

            if (num > 1) {
                validity.innerHTML = "Ok";
            } else {
                validity.innerHTML = "Not ok";
            }
        }
        else {
            validity.innerHTML = "Not ok";
        }
    })
})();
