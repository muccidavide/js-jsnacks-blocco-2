/* 
Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let intNumbersArray = [1 , 3, 4, 6, 7, 8, 13]
let sum = 0;

for (let i = 0; i < intNumbersArray.length; i++) {
    if (i % 2 !== 0) {
        sum += intNumbersArray[i]
    } else {
        console.log("numero in posizione pari");
    }
    
}

console.log(sum);