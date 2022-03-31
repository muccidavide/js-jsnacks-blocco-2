
/* 
Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

let minorArray = [1, 3, 6, 10 ]
let majorArray = [2, 4, 5, 6, 3, 5, 23, 34, 66]

while(majorArray.length > minorArray.length){
    let newElement = parseInt(Math.random()*100);

    minorArray.push(newElement)
}

console.log(minorArray);
