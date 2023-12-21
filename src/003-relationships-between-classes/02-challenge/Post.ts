import { Author } from "./Author"
type PostProps = {
  title: string
  content: string
  date: Date
}
export class Post {
  private title: string
  private content: string
  private date: Date
  private author: Author | null

  constructor({ title, content, date }: PostProps){
    this.title = title
    this.content = content
    this.date = date
    this.author = null
  }

  public getTitle() {
    return this.title
  }

  public setTitle(value: string) {
    this.title = value
  }

  public getContent() {
    return this.content
  }

  public setContent(value: string) {
    this.content = value
  }

  public getDate() {
    return this.date
  }

  public setDate(value: Date) {
    this.date = value
  }

  public getAuthor() {
    return this.author
  }

  public setAuthor(value: Author) {
    this.author = value
  }

  public state() {
    console.log(this)
  }
}
