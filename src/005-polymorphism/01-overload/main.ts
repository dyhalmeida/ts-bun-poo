import { Dog } from "./Dog"

const dog = new Dog()

// overload polymorphism
dog.react()
dog.react('Olá')
dog.react(10, 20)
dog.react(22, 40)
dog.react(true)
dog.react(false)