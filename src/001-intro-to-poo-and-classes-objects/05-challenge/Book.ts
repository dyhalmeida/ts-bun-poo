export class Book {
 
  constructor(
    private title: string,
    private author: string,
    private pages: number
  ){}

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getPages(): number {
    return this.pages;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public setPages(pages: number): void {
    this.pages = pages;
  }

  public readToPage(value: number): void {
    if (value >= this.getPages()) {
      throw new Error('The book does not have this page to read')
    }
    console.log(`Lendo o livro ${this.getTitle()} publicado por ${this.getAuthor()}, até a página ${value}`)
  }

  public getState() {
    return ({ ...this })
  }
}