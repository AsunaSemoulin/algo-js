// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");

        if (passOne.value === passTwo.value) {
            passOne.style.borderColor = "green";
            passTwo.style.borderColor = "green";
        } else {
            passOne.style.borderColor = "red";
            passTwo.style.borderColor = "red";
        }
    })
})();
