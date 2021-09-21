// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let target = document.getElementById("target");
    let text = target.innerHTML;
    let speed = 50;
    let a = 0;

    target.innerHTML = "";
    
    function typeWriter() {
        if (a < text.length) {
          target.innerHTML += text.charAt(a);
          a++;
        } setTimeout(typeWriter, speed);
    }
    typeWriter();
})();
