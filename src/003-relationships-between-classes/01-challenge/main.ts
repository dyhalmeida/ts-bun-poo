import { Fight } from "./Fight";
import { Fighter } from "./Fighter";

const fighter1 = new Fighter({
  name: 'Pretty Boy',
  nationality: 'France',
  age: 31,
  height: 1.75,
  weight: 68.9,
  victories: 11,
  defeats: 2,
  draws: 1
})

const fighter2 = new Fighter({
  name: 'Putscript',
  nationality: 'Brazil',
  age: 29,
  height: 1.68,
  weight: 57.8,
  victories: 14,
  defeats: 2,
  draws: 3
})

const fighter3 = new Fighter({
  name: 'Snapshadow',
  nationality: 'Eua',
  age: 35,
  height: 1.65,
  weight: 80.9,
  victories: 12,
  defeats: 2,
  draws: 1
})

const fighter4 = new Fighter({
  name: 'Dead code',
  nationality: 'Australia',
  age: 28,
  height: 1.93,
  weight: 81.6,
  victories: 13,
  defeats: 0,
  draws: 2
})

const fighter5 = new Fighter({
  name: 'Ufo cobol',
  nationality: 'Brazil',
  age: 37,
  height: 1.70,
  weight: 119.3,
  victories: 5,
  defeats: 4,
  draws: 3
})

const fighter6 = new Fighter({
  name: 'Nerdaart',
  nationality: 'Eua',
  age: 30,
  height: 1.81,
  weight: 105.7,
  victories: 12,
  defeats: 2,
  draws: 4
})

const uec01 = new Fight()
uec01.scheduleFight({
  fighter1: fighter5,
  fighter2: fighter6
})

uec01.fight()
