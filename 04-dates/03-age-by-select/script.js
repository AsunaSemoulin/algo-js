
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        
        let today = new Date();
        let birthdate = new Date(`${day} ${month} ${year}`);
        let age = today.getFullYear() - birthdate.getFullYear();
        let m = today.getMonth() - birthdate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        alert(age);
    })
})();
