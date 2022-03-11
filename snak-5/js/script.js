/**
 *
 *
Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const peopleArray = [
    {
        nome: "marco",
        cognome: "rossi",
        "età": 30,
        frase: "",
    },

    {
        nome: "giulio",
        cognome: "battista",
        "età": 18,
        frase: "",
    },

    {
        nome: "luca",
        cognome: "pezzolo",
        "età": 16,
        frase: "",
    },

    {
        nome: "igor",
        cognome: "miti",
        "età": 10,
        frase: "",
    },

    {
        nome: "lorenzo",
        cognome: "fumagalli",
        "età": 40,
        frase: "",
    },

    {
        nome: "veronica",
        cognome: "bianchi",
        "età": 16,
        frase: "",
    },

    {
        nome: "mario",
        cognome: "merola",
        "età": 60,
        frase: "",
    },
];

const newpeopleArray = peopleArray.map((Element) => {
    return Element.nome + Element.cognome
});

console.log(newpeopleArray)