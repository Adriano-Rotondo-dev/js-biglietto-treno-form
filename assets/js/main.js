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
const nameFieldEl = document.getElementById("name")
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
  console.log(userName)
  console.log(travelDistance);
  console.log(userAge);
});
//* inizializzo l'eventListener del bottone cancel per ricaricare la pagina
cancelButtonEl.addEventListener("click", () => location.reload());


/*
const pricePerKm = (0.21); 
const ticketPrice = Number(userKms * pricePerKm );

if (userAge <= 18 ) {
    console.log( "Il tuo biglietto scontato costa €" + (ticketPrice * 0.8).toFixed(2) ) 
} else if (userAge >= 65) {
    console.log( "Il tuo biglietto scontato costa €" + (ticketPrice * 0.6).toFixed(2) ) 
} else {
    console.log("il tuo biglietto costa €" + (ticketPrice).toFixed(2) ) //inserita un'alternativa priva di scontistica per non ripetere il messaggio precedente
};
*/
