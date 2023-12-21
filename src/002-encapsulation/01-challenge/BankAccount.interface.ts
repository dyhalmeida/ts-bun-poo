export interface IBankAccount {
  deposit(value: number): void
  withdraw(value: number): void
  checkBalance(): void
}
