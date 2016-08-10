import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Bar App!</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Whiskey", "Jack Daniels", 12.95, "70%", 0),
      new Keg("Ale", "Jack Daniels", 11.95, "75%", 1),
      new Keg("Beer", "Heineken", 10.95, "80%", 3)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parents', clickedKeg);
  }
}
