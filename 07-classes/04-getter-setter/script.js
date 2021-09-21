// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return `${this.firstname} ${this.lastname}`;
        }

        set name(newName) {
            this.firstname = (newName.split(" "))[0];
            this.lastname = (newName.split(" "))[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let person = new Person("Asuna", "Semoulin");
        console.log(person.name);
        person.name = "Jean Louis";
        console.log(person.name);
    })
})();
