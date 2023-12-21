export class Dog {
  // overload polymorphism
  public react(): void;
  public react(phrase: string): void;
  public react(hour: number, minutes: number): void;
  public react(owner: boolean): void;

  public react(phraseOrHourOrOwner?: string | number | boolean, minutes?: number): void {
    if (typeof phraseOrHourOrOwner === 'string') {
      if (phraseOrHourOrOwner === 'toma comid' || phraseOrHourOrOwner === 'Olá') {
        console.log('Abanar rabo e latir');
        return
      }
      console.log('Rosnar')
      return
    } else if (typeof phraseOrHourOrOwner === 'number' && minutes !== undefined) {
      if (phraseOrHourOrOwner < 12) {
        console.log('Abanar rabo')
        return
      }
      if (phraseOrHourOrOwner >= 18) {
        console.log('Ignorar')
        return
      }
      console.log('Abanar rabo e latir');
       return
    } else if (typeof phraseOrHourOrOwner === 'boolean') {
      if (phraseOrHourOrOwner === true) {
        console.log('Abanar rabo e latir');
        return
      }
      console.log('Rosnar e latir');
      return
    }
    console.log('ignorar')
    return
  }
}