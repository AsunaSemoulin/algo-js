// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {
    let randomNumber = Math.floor(Math.random() * 100);
    let guess = 0;
    let userNumber = parseInt(prompt("Number: "));
    
    while (userNumber != randomNumber) {
        console.log(userNumber);
        console.log(randomNumber);

        if (userNumber > randomNumber) {
            alert("lower");
        } else {
            alert("higher");
        }
        userNumber = parseInt(prompt("Number: "));
        guess++;
    }
    
    alert(`that's it! you needed ${guess} guesses`);
})();
