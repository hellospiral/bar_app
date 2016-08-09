import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Bar App!</h1>
      <h3 *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">{{ keg.name }}</h3>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Whiskey", "Jack Daniels", "$12.95", "70%", 0),
      new Keg("Ale", "Jack Daniels", "$11.95", "75%", 1),
      new Keg("Beer", "Heineken", "$10.95", "80%", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: string, public alcohol: string, public id: number) {

  }
}
