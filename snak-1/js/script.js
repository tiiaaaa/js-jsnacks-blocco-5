/**
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

Generare casualmente le statistiche di gioco, secondo queste regole:

A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

B - la media punti fatti per partita deve essere compresa tra 0 e 50

C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
*/

//! Oggetto creato
const playerBasketBall = {
    name: "Lebron",
    surname: "James",
    age: 37,
    code:"",
    mpp: "",
    "percentual-of-success": "",
}

//!Creo una funzione che genera attraverso altre 2 funzioni 5 lettere e 5 numeri random e li concatena
function generatePlayerCode(){
    return randomWord(5) + randomNumbers(5);
};

//!Accedo con dot notation alla proprietà CODE del oggetto e gli assegno la funzione
playerBasketBall.code = generatePlayerCode();
console.log(playerBasketBall);
//!Genero un numero randomico tra 0 e 50 e lo assegno alla proprietà mpp
playerBasketBall.mpp = Math.floor(Math.random() * 50 + 1);
//!Genero un numero randomico tra 0 e 100 e lo assegno alla proprietà "percentual-of-success"
playerBasketBall["percentual-of-success"] = Math.floor(Math.random() * 100 + 1);

//!Funzione che da una stringa di caratteri ne pesca N a caso (in base a cosa mettiamo in lenght)
function randomWord(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
};

//!Funzione che da una stringa di numeri ne pesca N a caso (in base a cosa mettiamo in lenght)
function randomNumbers(length) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
};