import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent} from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { RemainingPipe } from './remaining.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [RemainingPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="lessThan10">Show kegs with less than 10 pints</option>
    <option selected value="all">Show All Kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | remaining:selectedRemaining" (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [class.red]="currentKeg.isExpensive() === true"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg
    (onSubmitNewKeg)= "addKeg($event)">
  </new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public selectedRemaining: string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  addKeg(args: string[]): void {
    this.kegList.push(
      new Keg(args[0], args[1], parseInt(args[2]), args[3], this.kegList.length)
    );
  }
  onChange(optionFromMenu) {
    this.selectedRemaining = optionFromMenu;
  }
}
