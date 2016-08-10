export class Keg {
  public pints: number = 124;
  isExpensive() {
    if (this.price > 5) {
      return true;
    } else {
      return false;
    }
  }
  constructor(public name: string, public brand: string, public price: number, public alcohol: string, public id: number) {

  }
}
