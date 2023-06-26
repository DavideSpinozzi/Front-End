/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift();
pets.push("redfish");
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "k8";
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Suzuki",
  model: "Ignis",
  color: "black",
  trims: ["sport", "hybrid"],
});
for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1));
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) == "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
var i = 0;
while (i < numericArray.length && numericArray[i] != 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
var numeroCarattere = [];
for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      numeroCarattere.push(1);
      break;
    case "b":
      numeroCarattere.push(2);
      break;
    case "c":
      numeroCarattere.push(3);
      break;
    case "d":
      numeroCarattere.push(4);
      break;
    case "e":
      numeroCarattere.push(5);
      break;
    case "f":
      numeroCarattere.push(6);
      break;
    case "g":
      numeroCarattere.push(7);
      break;
    case "h":
      numeroCarattere.push(8);
      break;
    case "i":
      numeroCarattere.push(9);
    case "j":
      numeroCarattere.push(10);
      break;
    case "k":
      numeroCarattere.push(11);
      break;
    case "l":
      numeroCarattere.push(12);
      break;
    case "m":
      numeroCarattere.push(13);
      break;
    case "n":
      numeroCarattere.push(14);
      break;
    case "o":
      numeroCarattere.push(15);
      break;
    case "p":
      numeroCarattere.push(16);
      break;
    case "q":
      numeroCarattere.push(17);
      break;
    case "r":
      numeroCarattere.push(18);
      break;
    case "s":
      numeroCarattere.push(19);
      break;
    case "t":
      numeroCarattere.push(20);
      break;
    case "u":
      numeroCarattere.push(21);
      break;
    case "v":
      numeroCarattere.push(22);
    case "w":
      numeroCarattere.push(23);
      break;
    case "x":
      numeroCarattere.push(24);
      break;
    case "y":
      numeroCarattere.push(25);
      break;
    case "z":
      numeroCarattere.push(26);
      break;
  }
}
console.log(numeroCarattere);
