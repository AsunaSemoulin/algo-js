
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById("target");

    let date = new Date();

    let dayNumb = date.getDate();
    let dayStr = date.toLocaleString('en-us', { weekday: 'long' });

    let monthNumb = date.getMonth();
    let monthStr = date.toLocaleString('en-us', { month: 'long' })

    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    target.innerHTML = `${dayStr} ${dayNumb} ${monthStr} ${year}, ${hours}h${minutes}`;
})();
