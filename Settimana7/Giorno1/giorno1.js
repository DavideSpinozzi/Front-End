function Confronto(numero1, numero2) {
    var numeroCasuale = Math.floor(Math.random() * 100) + 1;
    console.log(numeroCasuale);
    var differenza1 = Math.abs(numero1 - numeroCasuale);
    var differenza2 = Math.abs(numero2 - numeroCasuale);
    if (numero1 === numeroCasuale) {
        return "Giocatore 1 ha azzeccato";
    }
    else if (numero2 === numeroCasuale) {
        return "Giocatore 2 ha azzeccato";
    }
    else {
        if (differenza1 < differenza2) {
            return "Giocatore 1 è più vicino";
        }
        else if (differenza2 < differenza1) {
            return "Giocatore 2 è più vicino";
        }
        else {
            return "Pareggio";
        }
    }
}
var Giocatore1 = 5;
var Giocatore2 = 64;
var risultato = Confronto(Giocatore1, Giocatore2);
console.log(risultato);
