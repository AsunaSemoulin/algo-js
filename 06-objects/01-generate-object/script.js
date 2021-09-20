// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let me = {
            "lastname": "Semoulin",
            "firstname": "Asuna",
            "age": 18,
            "city": "Ransart",
            "country": "Belgium"
        };

        console.log(me);
    })
})();
