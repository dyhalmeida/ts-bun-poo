import { IBankAccount } from "./BankAccount.interface";

// Value Object
class AccountNumber {
  constructor(public value: string) {
    if (!value) {
      throw new Error('O número da conta não pode ser vazio')
    }
  }
}

// Value Object
class AccountOwner {
  constructor(private value: string) {
    if (!value) {
      throw new Error('O dono da conta não pode ser vazio')
    }
  }
  fullName() {
    return this.value
  }

  firstName() {
    return this.value.split(' ')[0]
  }

  lastName() {
    return this.value.split(' ')[1]
  }
}

type BankAccountProps = {
  num: string
  owner: string
}
export class BankAccount implements IBankAccount {

  private balance: number = 0
  private num: AccountNumber
  private owner: AccountOwner
 
  constructor({ num, owner }: BankAccountProps){
    this.num = new AccountNumber(num)
    this.owner = new AccountOwner(owner)
  }

  public getOwner() {
    return this.owner
  }

  private getBalance(): number {
    return this.balance;
  }

  private setBalance(balance: number): void {
    this.balance = balance;
  }

  deposit(value: number): void {
    if (value <= 0) {
      throw new Error("O valor de deposito não pode ser menor ou igual a zero");
    }
    this.setBalance(this.getBalance() + value)
  }

  withdraw(value: number): void {
    if (value <= 0) {
      throw new Error("O valor de saque não pode ser menor ou igual a zero");
    }
    if (value > this.getBalance()) {
      throw new Error("O valor de saque não pode ser maior que o saldo");
    }
    this.setBalance(this.getBalance() - value)
  }

  checkBalance(): void {
    console.log({
      balance: this.getBalance()
    })
  }

  state() {
    console.log(this)
  }

}