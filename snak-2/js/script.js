/**
 *
 *
Crea un array composto da 12 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

Infine stampa separatamente i 3 array.

*
*/

//! Array di oggetti
const cars = [
    {
        brand: "bmw",
        modello: "serie1",
        alimentazione: "benzina",
    },

    {
        brand: "mercedes",
        modello: "classea",
        alimentazione: "elettrica",
    },

    {
        brand: "alfaromeo",
        modello: "giulietta",
        alimentazione: "benzina",
    },

    {
        brand: "fiat",
        modello: 500,
        alimentazione: "benzina",
    },

    {
        brand: "audi",
        modello: "a3",
        alimentazione: "diesel",
    },

    {
        brand: "jaguar",
        modello: "modello2",
        alimentazione: "diesel",
    },

    {
        brand: "volksvaghen",
        modello: "golf",
        alimentazione: "elettrica",
    },

    {
        brand: "ferrari",
        modello: "488",
        alimentazione: "benzina",
    },

    {
        brand: "fiat",
        modello: "panda",
        alimentazione: "elettrica",
    },

    {
        brand: "bmw",
        modello: "serie2",
        alimentazione: "diesel",
    },
];

//! .filter seleziona tutte le macchine benzina(ritornando true) e le aggiunge a questo array
const firstArray = cars.filter((element) => {
    if(element.alimentazione === "benzina") return true
});

const secondArray = cars.filter((element) => {
    if(element.alimentazione === "diesel") return true
});
//!Se le macchine non sono ne benzina ne diesel allora ritorna true e le inserisce in questo array
const thirdArray = cars.filter((element) => {
    if(element.alimentazione != "benzina" && cars.alimentazione != "diesel") return true
});

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);