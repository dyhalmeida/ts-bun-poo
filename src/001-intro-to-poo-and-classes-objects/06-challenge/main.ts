import { Rectangle } from "./Rectangle";

const rect = new Rectangle(400, 200)
console.log(rect.getState())

console.log(`A área do retângulo é: ${rect.calculateArea()}`)