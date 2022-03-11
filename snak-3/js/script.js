/**
 * 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

* 
*/

const firstArray = ["patate", "CAROTE", "CIPOLLE", "cavolo", "zucchine", "ANGURIA", "pomodori"];

const secondArray = firstArray.map((Element) => {
    return Element.charAt(0).toUpperCase() + 
    Element.substring(1).toLowerCase //! non capisco il  motivo del perchè non funzioni questa seconda parte della funzione
});

console.log(firstArray)
console.log(secondArray)