export class Rectangle {

  constructor(
    private base: number,
    private height: number
  ){}

  public getBase(): number {
    return this.base;
  }

  public getHeight(): number {
    return this.height;
  }

  public setBase(base: number): void {
    this.base = base;
  }

  public setHeight(height: number): void {
    this.height = height;
  }
  public calculateArea(): number {
    return this.base * this.height
  }

  public getState() {
    return ({ ...this })
  }
}