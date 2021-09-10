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

let saveFile = () => {
    let object = new Object();
    object.save = list;

    fs.writeFile('list.json', JSON.stringify(object), err => {
        if (err) {
            console.error(err);
            return;
        }
    })
}

let openFile = () => { 
    try {
        const data = fs.readFileSync('list.json', 'utf8')
        let object2 = data;
        try {
            object2 = JSON.parse(data);
        }
        catch {
            fs.saveFile("list.json", "{'save':[]}", err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        }

        list = object2.save;
    } catch (err) {
        console.error(err);
    }
}

while (actionNumber != 4) {

    let actionNumber = readlineSync.question("Enter your action's number: ");

    if (actionNumber == 1) {
        openFile();
        console.log(list);
    }
    else if (actionNumber == 2) {
        let newPizzaFlavor = readlineSync.question("Pizza flavor: ");

        list.push(newPizzaFlavor);
        saveFile();
    }
    else if (actionNumber == 3) {
        let removePizzaFlavor = readlineSync.question("Pizza flavor: ");

        let index = list.indexOf(removePizzaFlavor);
        list.splice(index, 1);
        saveFile();
    }
    else {
        saveFile();
        return;
    }
}
