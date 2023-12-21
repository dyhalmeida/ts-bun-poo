import { People } from "./People";

export class Student extends People {

  private login: string
  private totalWatched: number

  constructor(login: string, name: string, age: number, gender: 'M' | 'F') {
    super(name, age, gender);
    this.login = login
    this.totalWatched = 0
  }

  public getLogin(): string {
    return this.login;
  }

  public getTotalWatched(): number {
    return this.totalWatched;
  }

  public setLogin(login: string): void {
    this.login = login;
  }

  public setTotalWatched(totalWatched: number): void {
    this.totalWatched = totalWatched;
  }

  public watchedOneMore(): void {
    this.totalWatched++
  }

  public winExperience(): void {
    this.setExperience(this.getExperience() + 1)
  }

  // @override | polimorfismo de sobreposição
  state() {
    return {...this}
  }
}