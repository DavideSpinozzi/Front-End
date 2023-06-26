var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balance = 0;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.oneWithdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    };
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
        this.balance = 0;
    }
    MotherAccount.prototype.twoDeposit = function (amount) {
        this.balance += amount;
    };
    MotherAccount.prototype.twoWithdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    };
    MotherAccount.prototype.addInterest = function (interestRate) {
        var interest = this.balance * (interestRate / 100);
        this.balance += interest;
    };
    MotherAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return MotherAccount;
}());
// Creazione degli account
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
// Operazioni sui conti
sonAccount.oneDeposit(100);
sonAccount.oneWithdraw(50);
motherAccount.twoDeposit(500);
motherAccount.twoWithdraw(200);
motherAccount.addInterest(10);
// Stampa del saldo attuale
console.log("Saldo del conto figlio:", sonAccount.getBalance());
console.log("Saldo del conto madre:", motherAccount.getBalance());
