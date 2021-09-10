const readlineSync = require("readline-sync");
const fs = require('fs')

let board = `
Hello! Welcome to the Pizza Flavors Manager.

Please choose your actions:

1 - List all the pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program

`;

let list = [];

console.log(board);
let actionNumber;

fs.readFile('list.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    let dataString = data.toString();
    let finalData = dataString.split(",");
    list = finalData;
})

while (actionNumber != 4) {
    let actionNumber = readlineSync.question("Enter your action's number: ");

    if (actionNumber == 1) {
        console.log(list);
    }
    else if (actionNumber == 2) {
        let newPizzaFlavor = readlineSync.question("Pizza flavor: ");

        list.push(newPizzaFlavor);
    }
    else if (actionNumber == 3) {
        let removePizzaFlavor = readlineSync.question("Pizza flavor: ");

        let index = list.indexOf(removePizzaFlavor);
        list.splice(index, 1);
    }
    else {
        fs.writeFile('list.txt', list.toString(), err => {
            if (err) {
                console.error(err);
                return;
            }
        })
        return;
    }
}
