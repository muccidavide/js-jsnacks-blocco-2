/* 
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

 */

let somma = 0;

for ( i = 0; i < 5; i++){
    let NumbersUser = parseInt(prompt('Inserisci un numero'));
    somma += NumbersUser
}

let somma2 = 0;
let index = 0;

while (index < 5) {
    let NumbersUser2 = parseInt(prompt('Inserisci un numero'));
    somma2 += NumbersUser2

    index++;
    
}
console.log(somma);

console.log(somma2);



