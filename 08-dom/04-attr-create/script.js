// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let source = document.getElementById("source");
    let sourceImg = source.getAttribute("data-image");
    
    let target = document.getElementById("target");
    let img = document.createElement("img");

    target.appendChild(img);
    img.setAttribute("src", sourceImg);
    source.remove();
})();
