import { Mammal } from "./Mammal";

export class Dog extends Mammal {
  public makeSound(): void {
    console.log('Au au au')
  }
}