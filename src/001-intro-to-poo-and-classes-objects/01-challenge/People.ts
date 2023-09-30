import { Book } from "./Book";

/**
 * A classe People tem um método chamado borrowBook 
 * que aceita um parâmetro do tipo Book. Isso indica uma associação 
 * ou relacionamento onde uma instância de People pode interagir 
 * com instâncias de Book. 
 * 
 * No contexto do método borrowBook, uma pessoa está pegando emprestado 
 * um livro, sugerindo uma relação de associação entre pessoas e livros.
 */

export class People {

  /**
   * Construtor da classe: 
   * Define um construtor para a classe People que aceita três parâmetros 
   * (name, age, address) e os utiliza para inicializar propriedades 
   * públicas da instância da classe.
   */
  constructor(
    public name: string,
    public age: number,
    public address: string
  ){}

  /**
   * Método borrowBook: 
   * Declara um método chamado borrowBook que aceita um parâmetro do tipo Book. 
   * Isso indica uma associação entre objetos da classe People e objetos da classe Book, 
   * onde uma instância de People pode interagir com instâncias de Book.
   
   * Imprime uma mensagem formatada no console que inclui detalhes sobre o livro 
   * (book.title, book.author, book.yearOfPublication) e a pessoa (this.name) 
   * que pegou emprestado o livro.
  */
  public borrowBook(book: Book): void {
    console.log(`
      ${this.name} pegou emprestado o livro ${book.title} 
      publicado por ${book.author} no ano de ${book.yearOfPublication}`
    )
  }

  public getState(): void {
    console.log('state people: ', JSON.stringify(this))
  }

}