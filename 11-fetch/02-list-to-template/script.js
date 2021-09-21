

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes")
            .then(response => response.text())
            .then(data => {
                document.getElementById("target").innerHTML = data;
            })
    })
})();
