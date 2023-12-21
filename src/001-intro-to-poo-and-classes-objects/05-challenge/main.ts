import { Book } from "./Book";

const book = new Book('Durante a tormenta', 'Kelly Cole', 456)
console.log(book.getState())

book.readToPage(450)