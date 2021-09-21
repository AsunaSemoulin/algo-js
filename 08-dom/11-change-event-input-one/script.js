// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {
    document.getElementById("pass-one").setAttribute("maxlength", "10");
    // your code here
    document.getElementById("pass-one").addEventListener("keyup", (e) => {
        let counter = document.getElementById("counter");
        let pass = document.getElementById("pass-one").value;

        counter.innerHTML = pass.length + "/10";
    })
})();
