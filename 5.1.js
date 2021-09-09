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

askTvSerie();