import { Fighter } from "./Fighter";

type FightersProps = {
  fighter1: Fighter | null
  fighter2: Fighter | null
}
export class Fight {

  private fighter1: Fighter | null = null
  private fighter2: Fighter | null = null
  private rounds: number
  private approved: boolean

  constructor() {
    this.fighter1 = null
    this.fighter2 = null
    this.rounds = 3
    this.approved = false
  }

  public scheduleFight ({ fighter1,  fighter2 }: FightersProps) {
    if (fighter1?.getCategory() === fighter2?.getCategory() && fighter1 !== fighter2) {
      this.approved = true
      this.setFighter1(fighter1)
      this.setFighter2(fighter2)
      return
    } 
    this.approved = false
    this.setFighter1(null)
    this.setFighter2(null)
  }

  public fight() {
    if (!this.approved) {
      console.log('A luta não pode acontecer')
      return
    }

    this.getFighter1()?.present()
    this.getFighter2()?.present()

    const winner = Math.floor(Math.random() * 3)

    switch (winner) {
      case 0:
        console.log('A luta empatou')
        this.getFighter1()?.drawFight()
        this.getFighter2()?.drawFight()
        this.present()
        break;
    case 1:
        console.log(`${this.getFighter1()?.getName()} ganhou a luta`)
        this.getFighter1()?.winFight()
        this.getFighter2()?.loseFight()
        this.present()
        break;
    case 2:
        console.log(`${this.getFighter2()?.getName()} ganhou a luta`)
        this.getFighter2()?.winFight()
        this.getFighter1()?.loseFight()
        this.present()
        break;    
    }
  }

  private present() {
    console.log(this.fighter1?.status())
    console.log('-----------------------------------------')
    console.log(this.fighter2?.status())
  }

  public getFighter1() {
    return this.fighter1
  }

  private setFighter1(fighter: Fighter | null) {
    this.fighter1 = fighter
  }

  public getFighter2() {
    return this.fighter2
  }

  private setFighter2(fighter: Fighter | null) {
    this.fighter2 = fighter
  }

}