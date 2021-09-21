//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        sayHello() {
            return `Hello, ${this.firstname} ${this.lastname}!`;
        }
    }

    let person = new Person("Asuna", "Semoulin");
    console.log(person.sayHello());
})();
