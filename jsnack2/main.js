/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo.
 */

let numberUser = parseInt(prompt('scegli un numero'));

if (numberUser % 2 === 0){
    console.log(`il numero ${numberUser} è pari`);
} else {
    console.log(`il numero successivo è ${numberUser + 1}`);
}

