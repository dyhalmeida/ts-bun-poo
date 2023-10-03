import { Pet } from "./Pet";

const dog = new Pet('R2D2', 2, 'dog')
console.log({
  name: dog.getName(),
  age: dog.getAge(),
  type: dog.getType()
})

/** output
  {
    name: "R2D2",
    age: 2,
    type: "dog"
  }
 */