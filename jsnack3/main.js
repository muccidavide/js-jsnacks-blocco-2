/* 
Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

let firstNamesArray = ['Luca', 'Marco', 'Davide', 'Antonio', 'Gabriele']
let lastNamesArray = ['Mucci', 'Rossi', 'Corti', 'Bonelli', 'Brambilla']

let listFakeNames = []

for (let i = 0; i < firstNamesArray.length; i++) {
    
    let x = parseInt(Math.random()*firstNamesArray.length)
    let y = parseInt(Math.random()*lastNamesArray.length)

    let randomNames = firstNamesArray[x] + " " + lastNamesArray[y];

    listFakeNames.push(randomNames)

    
}
console.log(listFakeNames);


