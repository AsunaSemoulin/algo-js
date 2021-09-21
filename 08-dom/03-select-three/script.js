// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let targets = document.getElementsByClassName("target");

    for (let a = 0; a < targets.length; a++) {
        targets[a].innerHTML = "owned";
    }
})();
