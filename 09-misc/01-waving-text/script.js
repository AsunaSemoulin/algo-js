// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let text = "Hello world!";
    document.getElementById("target").value = text;

    let fonts = [
        "monospace",
        "arial",
        "verdana",
        "helvetica",
        "sans-serif"

    ]

    let text2 = text.split('');

    text2 = text2.map(function (char) {

        if (char === ' ') {
            return char;
        }
    
        return `<span style="font-family:${fonts[Math.floor(Math.random() * fonts.length)]};">${char}</span>`;
    });
    
    // convert the array back into a string
    text2 = text2.join('');
    
    // replace the original string with the new 'fancy' string
    document.getElementById("target").innerHTML = text2;
})();
