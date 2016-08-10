import { Component, EventEmitter } from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <h3>Create a new keg: </h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newKegName>
    <button (click)="addKeg(newKegName)" class="btn-success btn-lg add-button">Add</button>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement) {
    this.onSubmitNewKeg.emit(userName.value);
    userName.value="";
  }
}
