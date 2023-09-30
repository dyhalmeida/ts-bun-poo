import { Book } from "./Book";
import { People } from "./People";

// Criando objetos da classe Book
const book1 = new Book('Apredendo POO', 'João Silva', 2020)
const book2 = new Book('HTML for Baby', 'Maria Oliveira', 2018)

// Exibindo informações dos livros
console.log(book1.getState())
console.log(book2.getState())

// Criando objetos da classe People
const people1 = new People('Diego Almeida', 31, 'Rua das Palmas, 07')
const people2 = new People('Laura Anghel', 8, 'Rua das Palmas, 07')

// Exibindo informações dos peoples
console.log(people1.getState())
console.log(people2.getState())

// Associando um livro a people1
people1.borrowBook(book1)

// Associando um livro a people2
people2.borrowBook(book2)
