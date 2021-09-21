// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let img = document.querySelector("img");

    img.addEventListener("mouseover", () => {
        let dataHover = img.getAttribute("data-hover");

        img.setAttribute("src", dataHover);
    })
})();
