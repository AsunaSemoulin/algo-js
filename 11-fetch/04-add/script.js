// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let heroName = document.getElementById("hero-name").value;
        let heroAlterEgo = document.getElementById("hero-alter-ego").value;
        let heroPowers = document.getElementById("hero-powers").value.split(" ");
    
        let data = {
            "name": heroName,
            "alterEgo": heroAlterEgo,
            "abilities": heroPowers
        };

        console.log(data);

        fetch("http://localhost:3000/heroes", { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) })
            .then(res => res.json())
    })
})();
