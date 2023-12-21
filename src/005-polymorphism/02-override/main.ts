import { Dog } from "./Dog";
import { Mammal } from "./Mammal";
import { Wolf } from "./Wolf";

const mammal = new Mammal()
const dog = new Dog
const wolf = new Wolf()

// Override polymorphism
mammal.makeSound() // Som de mamífero
dog.makeSound() // Au au au
wolf.makeSound() // Auuuuuuuuuu!