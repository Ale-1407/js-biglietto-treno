/* 

Il programma dovrà chiedere all'utente il numero di chilometri
che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo 
totale del viaggio, secondo queste regole:
  -condizioni:
   il prezzo del biglietto è definito in base ai km (0.21 € al km)
   va applicato uno sconto del 20% per i minorenni
   va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
  - scrivere il prezzo
  - limitare il prezzo a  2 decimali

 */


/* NUMERO CHILOMETRI ED ETA' PASSEGGERO*/

let km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(km);

let age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

/* CALCOLO PREZZO TOTALE DEL VIAGGIO */

const pricekm = 0.21;
let total = km * pricekm;
console.log(total);

/* SCONTO 20% */

let totaldiscount20 = total * 0.2;
let discount20 = total - totaldiscount20;


/* SCONTO 40% */

let totaldiscount40 = total * 0.4;
let discount40 = total - totaldiscount40;

/* OUTPUT */

if (age <= 18){
    totalprice = discount20.toFixed(2);
}

else if (age >= 65){
    totalprice = discount40.toFixed(2);
}

else{
    totalprice = total.toFixed(2);
}

document.getElementById('prezzo').innerHTML = 
`Il costo del tuo biglietto è: ${totalprice} €`;