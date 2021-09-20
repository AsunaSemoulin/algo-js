
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let target = document.getElementById("target");

    // your code here
    let hour = new Date().getHours();

    if (hour < 18) {
        target.innerHTML = "Hello";
    } else {
        target.innerHTML = "Good evening!";
    }
})();
