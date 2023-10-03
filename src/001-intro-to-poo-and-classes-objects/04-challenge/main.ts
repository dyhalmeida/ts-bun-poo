import { BankAccount } from "./BankAccount";

const account = new BankAccount('00001', 'Diego Almeida', 0);
console.log(account.getState())

account.deposit(500)
console.log(account.getState())

account.deposit(250)
console.log(account.getState())

account.withDraw(700)
console.log(account.getState())

account.withDraw(60)
console.log(account.getState())