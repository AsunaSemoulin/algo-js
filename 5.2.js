const readlineSync = require("readline-sync");

let askTvSerie = () => {
    let name = readlineSync.question("Your favorite TV serie's name: ");
    let year = readlineSync.question("Your favorite TV serie's production year: ");
    let names = readlineSync.question("Your favorite TV serie's names of the cast members: ");

    let object = {};

    object.name = name;
    object.production_year = year;
    object.cast_members = names;

    console.log(JSON.stringify(object, undefined, 2));
    return object;
}

let shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
      
        [array[i], array[j]] = [array[j], array[i]];
        return array;
    }
}

let randomizeCast = (tvSerie) => {
    let arr = tvSerie.cast_members;
    arr = arr.split(", ");

    console.log(typeof(arr));

    console.log(shuffle(arr));
}

randomizeCast(askTvSerie());