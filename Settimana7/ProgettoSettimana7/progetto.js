"use strict";
class User {
    constructor(carica, numeroChiamata) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamata;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoChiamata = 0.20 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Credito residuo insufficente");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Chiamate azzerate");
    }
}
const firstUser = new User(30, 0);
const secondUser = new User(10, 0);
const thirdUser = new User(5, 0);
firstUser.ricarica(10);
firstUser.chiamata(5);
firstUser.ricarica(2);
firstUser.chiamata(3);
console.log("Primo Utente");
console.log("Credito residuo: " + firstUser.numero404());
console.log("Chiamate effettuate: " + firstUser.getNumeroChiamate());
console.log("-----------------------");
secondUser.ricarica(5);
secondUser.chiamata(5);
secondUser.ricarica(1);
secondUser.chiamata(7);
console.log("Secondo Utente");
console.log("Credito residuo: " + secondUser.numero404());
console.log("Chiamate effettuate: " + secondUser.getNumeroChiamate());
console.log("-----------------------");
thirdUser.ricarica(20);
thirdUser.chiamata(40);
thirdUser.ricarica(1);
thirdUser.chiamata(7);
console.log("Terzo Utente");
console.log("Credito residuo: " + thirdUser.numero404());
console.log("Chiamate effettuate: " + thirdUser.getNumeroChiamate());
