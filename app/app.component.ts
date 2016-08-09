import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `

    <div class="container">
      <h1>Bar App!</h1>
      <keg-list [kegList]="kegs"></keg-list>
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

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  template: `
    <h3 *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">{{ currentKeg.name}}</h3>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
