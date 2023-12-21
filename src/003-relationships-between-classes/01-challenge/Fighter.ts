
type FighterProps = {
  name: string
  nationality: string
  age: number
  height: number
  weight: number
  victories: number
  defeats: number
  draws: number
}
export class Fighter {

  private name: string
  private nationality: string
  private age: number
  private height: number
  private weight: number
  private category: string
  private victories: number
  private defeats: number
  private draws: number

  constructor(props: FighterProps){
    this.name = props.name
    this.nationality = props.nationality
    this.age = props.age
    this.height = props.height
    this.weight = props.weight
    this.category = ''
    this.victories =  props.victories
    this.defeats = props.defeats
    this.draws = props.draws

    this.setCategory()
  }

  // Getters
  public getName(): string {
    return this.name;
  }

  public getNationality(): string {
    return this.nationality;
  }

  public getAge(): number {
    return this.age;
  }

  public getHeight(): number {
    return this.height;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getCategory() {
    return this.category;
  }

  public getVictories() {
    return this.victories;
  }

  public getDefeats(): number {
    return this.defeats;
  }

  public getDraws(): number {
    return this.draws;
  }

  // Setters
  private setName(name: string): void {
    this.name = name;
  }

  private setNationality(nationality: string): void {
    this.nationality = nationality;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
    this.setCategory()
  }

  private setCategory(): void {
    if (this.getWeight() < 52.2) {
      this.category = 'invalid'

    } else if (this.getWeight() <= 70.3) {
      this.category = 'light_weight'
    } else if (this.getWeight() <= 83.9) {
      this.category = 'average_weight'
    } else if (this.getWeight() <= 120.2) {
      this.category = 'heavy_weight'
    } else {
      this.category = 'invalid'
    }
  }

  private setVictories(victories: number): void {
    this.victories = victories;
  }

  private  setDefeats(defeats: number): void {
    this.defeats = defeats;
  }

  private  setDraws(draws: number): void {
    this.draws = draws;
  }

  public present() {
    console.log(`
      --------------------- Apresentação ----------------------------------------
      Chegou a hora! Apresentamos o lutador ${this.getName()},
      diretamente de ${this.getNationality()} com ${this.getAge()} anos
      e ${this.getHeight()} de altura, pesando ${this.getWeight()} kg.
      Ele possui ${this.getVictories()} vitórias, ${this.getDefeats()} derrotas
      e ${this.getDraws()} empates!
      --------------------- fim apresentação ------------------------------------
    `)
  }

  public status() {
    console.log(`
    --------------------- Status ----------------------------------------
    ${this.getName()} é um peso ${this.getCategory()},
    ganhou ${this.getVictories()} vezes,
    empatou ${this.getDraws()} vezes,
    perdeu ${this.getDefeats()} vezes.
    --------------------- fim status -------------------------------------
  `)
  }

  public winFight() {
    this.setVictories(this.getVictories() + 1)
  }

  public loseFight() {
    this.setDefeats(this.getDefeats() + 1)
  }

  public drawFight() {
    this.setDraws(this.getDraws() + 1)
  }
}