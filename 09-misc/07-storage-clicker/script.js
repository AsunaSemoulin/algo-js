// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {
    let clicks = 0;

    if (localStorage.getItem("clicks") === null) {
        clicks = 0;
    } else {
        clicks = localStorage.getItem("clicks");
    }
    // your code here
    document.getElementById("target").innerHTML = clicks;
    
    document.getElementById("increment").addEventListener("click", () => {
        clicks++;
        document.getElementById("target").innerHTML = clicks;
        localStorage.setItem("clicks", clicks);
    })
})();
