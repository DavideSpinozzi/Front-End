class SonAccount {
    private balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    public oneDeposit(amount: number): void {
      this.balance += amount;
    }
  
    public oneWithdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  class MotherAccount {
    private balance: number;
  
    constructor() {
      this.balance = 0;
    }
  
    public twoDeposit(amount: number): void {
      this.balance += amount;
    }
  
    public twoWithdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  
    public addInterest(interestRate: number): void {
      const interest = this.balance * (interestRate / 100);
      this.balance += interest;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  // Creazione degli account
  const sonAccount = new SonAccount();
  const motherAccount = new MotherAccount();
  
  // Operazioni sui conti
  sonAccount.oneDeposit(100);
  sonAccount.oneWithdraw(50);
  
  motherAccount.twoDeposit(500);
  motherAccount.twoWithdraw(200);
  motherAccount.addInterest(10);
  
  // Stampa del saldo attuale
  console.log("Saldo del conto figlio:", sonAccount.getBalance());
  console.log("Saldo del conto madre:", motherAccount.getBalance());