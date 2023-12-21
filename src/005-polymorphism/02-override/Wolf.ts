import { Mammal } from "./Mammal";

export class Wolf extends Mammal {
  // @override
  public makeSound(): void {
    console.log('Auuuuuuuuuu!')
  }
}