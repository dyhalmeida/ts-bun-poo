import { Class } from "./Class"

type SchoolProps = {
  name: string
  address: string
}
export class School {
  private name: string
  private address: string
  private classes: Class[]

  constructor({ name, address }: SchoolProps) {
    this.name = name
    this.address = address
    this.classes = []
  }

  public addClass(value: Class) {
    this.classes = [...this.classes, value]
  }

  public getClasses() {
    return this.classes
  }

  public state() {
    console.log(this)
  }
}
