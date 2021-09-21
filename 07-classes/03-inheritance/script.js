// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting = "Meow";

        constructor(name) {
            super();
            this.name = name;
        }
    }

    class Dog extends Animal {
        static greeting = "Woof";

        constructor(name) {
            super();
            this.name = name;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let cat = new Cat("Skitty");
        let dog = new Dog("Woof");

        console.log(cat.sayHello());
        console.log(dog.sayHello());
    })
})();
