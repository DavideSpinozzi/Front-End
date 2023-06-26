var Vestiti = /** @class */ (function () {
    function Vestiti(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Vestiti.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Vestiti.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Vestiti;
}());
var arrayVestiti = [
    {
        "id": 1,
        "codprod": 2121,
        "collezione": "primavera",
        "capo": "cardigan",
        "modello": 1231,
        "quantita": 5,
        "colore": "nero",
        "prezzoivaesclusa": 18.50,
        "prezzoivainclusa": 22.57,
        "disponibile": "negozio",
        "saldo": 45
    },
    {
        "id": 2,
        "codprod": 4111,
        "collezione": "estate",
        "capo": "t-shirt",
        "modello": 1251,
        "quantita": 6,
        "colore": "rosso",
        "prezzoivaesclusa": 5.50,
        "prezzoivainclusa": 6.71,
        "disponibile": "magazzino",
        "saldo": 30
    },
    {
        "id": 3,
        "codprod": 1181,
        "collezione": "inverno",
        "capo": "felpa",
        "modello": 1229,
        "quantita": 8,
        "colore": "beige",
        "prezzoivaesclusa": 17.50,
        "prezzoivainclusa": 21.35,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 4,
        "codprod": 1111,
        "collezione": "estate",
        "capo": "maglione",
        "modello": 1221,
        "quantita": 4,
        "colore": "verde",
        "prezzoivaesclusa": 20,
        "prezzoivainclusa": 24.40,
        "disponibile": "negozio",
        "saldo": 50
    },
    {
        "id": 5,
        "codprod": 6111,
        "collezione": "primavera",
        "capo": "maglia",
        "modello": 1021,
        "quantita": 5,
        "colore": "blu",
        "prezzoivaesclusa": 11,
        "prezzoivainclusa": 13.42,
        "disponibile": "magazzino",
        "saldo": 60
    }
];
var vestiti = [];
for (var _i = 0, arrayVestiti_1 = arrayVestiti; _i < arrayVestiti_1.length; _i++) {
    var item = arrayVestiti_1[_i];
    var vestito = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
    vestiti.push(vestito);
}
for (var _a = 0, vestiti_1 = vestiti; _a < vestiti_1.length; _a++) {
    var vestito = vestiti_1[_a];
    var saldoCapo = vestito.getsaldocapo();
    var acquistoCapo = vestito.getacquistocapo();
    console.log("ID: ".concat(vestito.id));
    console.log("Capo: ".concat(vestito.capo));
    console.log("Saldo del capo: ".concat(saldoCapo));
    console.log("Prezzo di acquisto del capo: ".concat(acquistoCapo));
    console.log('-----------------------------');
}
