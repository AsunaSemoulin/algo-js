
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let target = document.getElementById("target");

    // your code here
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour < 17 && minute < 30) {
        target.innerHTML = "Hello";
    } 
    else if (hour < 16 && minute > 30) {
        target.innerHTML = "Hello";
    }
    else {
        target.innerHTML = "Good evening!";
    }

})();
