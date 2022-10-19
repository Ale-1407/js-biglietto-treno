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

const price = 0.21;
let total = km * price;
console.log(total);

/* SCONTO 20% */

let discount20 = (total / 100) * 20;
let totdiscount20 = discount20 - total;


/* SCONTO 40% */

let discount40 = (total / 100) * 40;
let totdiscount40 = discount40 - total;
