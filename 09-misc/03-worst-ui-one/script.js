// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {
    let target = document.getElementById("target");
    let slider = document.getElementById("slider");
    // your code here
    slider.addEventListener("input", () => {
        target.innerHTML = slider.value;    
    })
})();
