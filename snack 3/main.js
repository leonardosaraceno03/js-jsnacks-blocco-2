randomNumbersArray = [];
somma = 0;
for (let i= 0; i<5; i++){
    let randomNumber = parseInt(prompt('digita un numero casuale'));
    randomNumbersArray.push(randomNumber);
    if((i % 2) != 0){
        somma = (somma + randomNumber);
    }
}
console.log(somma)
