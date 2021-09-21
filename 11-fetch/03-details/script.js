// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let id = parseInt(document.getElementById("hero-id").value);

        fetch("http://localhost:3000/heroes")
            .then(response => response.json())
            .then(data => {
                let target = document.getElementById("target");

                let _hero = document.createElement("li");
                _hero.classList.add("hero");

                let _title = document.createElement("h4");
                _title.classList.add("title");

                let _powers = document.createElement("p");
                _powers.classList.add("powers");
                _powers.innerHTML = "";
                for (let power of data[id].abilities) {
                    _powers.innerHTML += power + "<br>";
                }

                let _name = document.createElement("strong");
                _name.classList.add("name");
                _name.innerHTML = data[id].name;

                let _alter_ego = document.createElement("em");
                _alter_ego.classList.add("alter-ego");
                _alter_ego.innerHTML = data[id].alterEgo;

                target.innerHTML = "";
                
                target.appendChild(_hero);
                _hero.appendChild(_title);
                _hero.appendChild(_powers);
                _title.appendChild(_name);
                _title.appendChild(_alter_ego);
            })
    })
})();
