// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let arr = [];
        
        keys.forEach((key, index) => {
            arr.push([key, values[index]]);
        })

        console.log(arr);

        let obj = Object.fromEntries(arr);
        console.log(obj);
    })
})();
