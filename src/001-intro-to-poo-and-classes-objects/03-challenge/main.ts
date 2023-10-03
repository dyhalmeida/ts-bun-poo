import { Car } from "./Car";

const car = new Car('Toyota Corolla', 'Prata', 2022)

console.log({
  model: car.getModel(),
  color: car.getColor(),
  year: car.getYear()
})

car.setModel('Honda Civic')
car.setColor('Azul')
car.setYear(2023)

console.log({
  model: car.getModel(),
  color: car.getColor(),
  year: car.getYear()
})

/** Output
  {
    model: "Toyota Corolla",
    color: "Prata",
    year: 2022
  }
  {
    model: "Honda Civic",
    color: "Azul",
    year: 2023
  }
*/