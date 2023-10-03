export class BankAccount {
  
  constructor(
    private num: string,
    private owner: string,
    private balance: number
  ){}

  public getNum(): string {
    return this.num;
  }

  public getOwner(): string {
    return this.owner;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(value: number): void {
    this.balance += value
  }

  public withDraw(value: number): void {
    if (value >= this.getBalance()) {
      throw new Error('Insufficient balance')
    }
    this.balance -= value
  }

  public getState() {
    return ({ ...this })
  }
}
