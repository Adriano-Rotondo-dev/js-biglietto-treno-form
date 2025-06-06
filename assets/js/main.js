/* 
Scrivere un programma che chieda all’utente:
 Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/
//* salvo in una costante il DOM node dell'input name
const nameFieldEl = document.getElementById("full-name");
//* salvo in una costante il DOM node dell'input kms
const kmFieldEl = document.getElementById("kms");
//* salvo in una costante il DOM node dell'input age
const ageFieldEl = document.getElementById("age");
//* salvo in una costante il DOM node del button per inviare i dati alla console
const submitButtonEl = document.getElementById("submit");
//* salvo in una costante il DOM node del button per ricaricare la pagina
const cancelButtonEl = document.getElementById("cancel");
//* inizializzo l'eventListener del bottone submit per stampare in console i valori inseriti dall'utente
submitButtonEl.addEventListener("click", () => {
  const userName = nameFieldEl.value;
  const travelDistance = Number(kmFieldEl.value);
  const userAge = Number(ageFieldEl.value);
  const pricePerKm = 0.21;
  console.log(userName);
  console.log(travelDistance);
  console.log(userAge);
  //*salvo in una variabile il prezzo del biglietto
  let ticketPrice = travelDistance * pricePerKm;
  //*stabilisco le condizioni di scontistica del biglietto in base ad ageFieldEl.value
  if (userAge < 18) {
    finalPrice = ticketPrice * 0.8;
  } else if (userAge > 65) {
    finalPrice = ticketPrice * 0.6;
  } else if (userAge > 18 && userAge < 65) {
    finalPrice = ticketPrice;
  }
  //*stampo in console il prezzo finale, mostrando fino a 2 decimali
  console.log(finalPrice.toFixed(2));
});
//* inizializzo l'eventListener del bottone cancel per ricaricare la pagina
cancelButtonEl.addEventListener("click", () => location.reload());

//* seleziono gli elementi interni al form e li salvo in DOM nodes
const formEl = document.querySelector("form")
const inputNameEl = document.getElementById("full-name")
const inputAgeEl = document.getElementById("age")
const inputDistanceEl = document.getElementById("kms")
//*stampo in console 
console.log(formEl, inputNameEl, inputAgeEl, inputDistanceEl)

//* seleziono gli elementi da inserire nella card

const cardHeaderEl = document.querySelector(".card-header")
const offerEL = document.querySelector(".ticketType")
const offerCodeEL = document.querySelector(".ticketCode")
const ticketImg = document.querySelector("img")


