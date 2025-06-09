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
 let offer;
  let offerCode;
let pricePerKm = 0.21 


//* inizializzo l'eventListener del bottone cancel per ricaricare la pagina
cancelButtonEl.addEventListener("click", () => location.reload());

//* seleziono gli elementi interni al form e li salvo in DOM nodes
const formEl = document.querySelector("form");
const inputNameEl = document.getElementById("full-name");
const inputAgeEl = document.getElementById("age");
const inputDistanceEl = document.getElementById("kms");
//*stampo in console
console.log(formEl, inputNameEl, inputAgeEl, inputDistanceEl);

//* seleziono gli elementi da inserire nella card

const passengerNameEl = document.querySelector(".full-name");
const offerEl = document.querySelector(".ticketType");
const offerCodeEl = document.querySelector(".ticketCode");
const ticketImgEl = document.querySelector("img");
const ticketPriceEl = document.querySelector(".price");
const thankYouEl = document.querySelector(".thank-you");

//* implemento elementListener per il form

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = nameFieldEl.value;
  const distanceValue = kmFieldEl.value;
  const ageValue = ageFieldEl.value;
  console.log(nameValue, distanceValue, ageValue);
  //* aggiorno la DOM card
  //* aggiorno il passengerName con il value inserito
  passengerNameEl.innerHTML = nameValue;
  //* credo due let per inserire tipo di biglietto e codice biglietto relativi all'ageValue
 
  let ticketPrice = distanceValue * pricePerKm;
  if (ageValue < 18) {
    offer = "Minorenne";
    finalPrice = ticketPrice * 0.8
    offerCode = "UA" + distanceValue;
  } else if (ageValue > 65) {
    offer = "Over 65";
    finalPrice = ticketPrice * 0.6;
    offerCode = "OSF" + distanceValue;
  } else {
    offer = "Intero";
    finalPrice = ticketPrice
    offerCode = "I" + distanceValue;
  }
  console.log(finalPrice.toFixed(2));
  //* mostro in pagina nei div .ticketType e .ticketCode
  offerEl.innerHTML = offer;
  offerCodeEl.innerHTML = offerCode;
  //* aggiorno il div .price per mostrare in pagina il costo del biglietto
  ticketPriceEl.innerHTML = "€" + finalPrice.toFixed(2);
  //* aggiorno l'img
  ticketImgEl.src = "./assets/img/train.png";
  //* aggiorno il messaggio di ringraziamento
  thankYouEl.innerHTML = "Grazie e Buon Viaggio";
});
