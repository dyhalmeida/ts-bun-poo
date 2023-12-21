import { Class } from "./Class";
import { School } from "./School";

const universeKids = new School({
  name: 'Universo Kids',
  address: 'Rua das Palmas, 07, Gleba E, Camaçari-BA, 42808139'
})

const classA = new Class({ name: 'Turma A - 1 ano' })
classA.addStudent('Laura Anghel')
classA.addStudent('Diego Almeida')
classA.addStudent('Mayara rocha')

const classB = new Class({ name: 'Turma B - 2 ano' })
classB.addStudent('Maria José')
classB.addStudent('Ivanildes Rocha')
classB.addStudent('Bruna Almeida')

universeKids.addClass(classA)
universeKids.addClass(classB)

console.log(universeKids.getClasses())

universeKids.getClasses()[0].addStudent('Roberto Sales')

console.log(universeKids.getClasses())
