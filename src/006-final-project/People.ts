export abstract class People {
  protected name: string
  protected age: number
  protected gender: 'M' | 'F'
  protected experience: number

  constructor(name: string, age: number, gender: 'M' | 'F') {
    this.name = name
    this.age = age
    this.gender = gender
    this.experience = 0
  }

  public getName() {
    return this.name
  }

  public setName(value: string) {
    this.name = value
  }

  public getAge() {
    return this.age
  }

  public setAge(value: number) {
    this.age = value
  }

  public getGender() {
    return this.gender
  }

  public setGender(value: 'M' | 'F') {
    this.gender = value
  }

  public getExperience() {
    return this.experience
  }

  public setExperience(value: number) {
    this.experience = value
  }

  public abstract winExperience(): void

  state() {
    return {...this}
  }
}