export class Book {

  constructor(
    public title: string,
    public author: string,
    public yearOfPublication: number
  ) {}

  getState(): void {
    console.log('state book: ', JSON.stringify(this))
  }

}