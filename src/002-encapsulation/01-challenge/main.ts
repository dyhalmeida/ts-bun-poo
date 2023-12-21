import { BankAccount } from "./BankAccount";

const account = new BankAccount({
  num: '0001',
  owner: 'Diego Almeida'
})
account.state()
console.log(account.getOwner().fullName())
console.log(account.getOwner().firstName())
console.log(account.getOwner().lastName())
// account.deposit(200)
// account.state()
// account.deposit(1000)
// account.checkBalance()
// account.withdraw(50)
// account.checkBalance()