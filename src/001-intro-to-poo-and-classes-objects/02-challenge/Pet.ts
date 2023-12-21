export class Pet {
  
  public constructor(
    public name: string,
    public age: number,
    public type: string
  ) {}

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getType(): string {
    return this.type;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public setType(type: string): void {
    this.type = type;
  }
}
