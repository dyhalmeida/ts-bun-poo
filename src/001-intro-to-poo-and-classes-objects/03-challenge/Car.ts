export class Car {
  constructor(
    private model: string,
    private color: string,
    private year: number
  ) {}

  public getModel(): string {
    return this.model;
  }

  public getColor(): string {
    return this.color;
  }

  public getYear(): number {
    return this.year;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setYear(year: number): void {
    this.year = year;
  }
}