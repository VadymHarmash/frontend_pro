class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(moneyToDeposit){
    this.balance += moneyToDeposit;
  }

  withdraw(moneyToWithdraw) {
    moneyToWithdraw <= this.balance ? this.balance -= moneyToWithdraw : console.log('There are not enough funds in the account')
  }

  getBalance() {
    return this.balance;
  }

  // getBalance using getter
  get currentBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
account1.withdraw(1400);
console.log(account1.getBalance());
