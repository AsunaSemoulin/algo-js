
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let num = 0;

        for (let month = 0; month <= 12; month++) {
            for (let day = 0; day <= 31; day++) {
                let date = new Date(year, month, day);

                if (date.getDate() == 13 && date.toLocaleString('en-us', { weekday: "long"}) == "Friday") {
                    num++;
                }
            }
        }

        alert(num);
    })
})();
