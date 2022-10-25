let names = ["nome1", "nome2", "nome3", "nome4"]
let surnames = ["cognome1", "cognome2", "cognome3", "cognome4"]

let randomName= Math.floor(Math.random()*names.length);
let randomSurname = Math.floor(Math.random()*surnames.length);

console.log(`${randomName, names[randomName]} ${randomSurname, surnames[randomSurname]}`)