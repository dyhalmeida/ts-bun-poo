type AuthorProps = {
  name: string
  email: string
  biography: string
}
export class Author {
  private name: string
  private email: string
  private biography: string

  constructor({ name, email, biography }: AuthorProps) {
    this.name = name
    this.email = email
    this.biography = biography
  }

  public getName(): string {
    return this.name
  }

  public setName(value: string): void {
    this.name = value
  }

  public getEmail(): string {
    return this.email
  }

  public setEmail(value: string): void {
    this.email = value
  }

  public getBiography(): string {
    return this.biography
  }

  public setBiography(value: string): void {
    this.biography = value
  }

  public state(): void {
    console.log(this)
  }
}
