function Confronto(numero1: number, numero2: number): string {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;
    console.log(numeroCasuale);
    let differenza1 = Math.abs(numero1 - numeroCasuale);
    let differenza2 = Math.abs(numero2 - numeroCasuale);
  
    if (numero1 === numeroCasuale) {
      return "Giocatore 1 ha azzeccato";
    } else if (numero2 === numeroCasuale) {
      return "Giocatore 2 ha azzeccato";
    } else {
      if (differenza1 < differenza2) {
        return "Giocatore 1 è più vicino";
      } else if (differenza2 < differenza1) {
        return "Giocatore 2 è più vicino";
      } else {
        return "Pareggio";
      }
    }
  }
  
  let Giocatore1 : number = 5;
  let Giocatore2 : number= 64;
  let risultato : string = Confronto(Giocatore1, Giocatore2);
  console.log(risultato);