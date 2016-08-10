import { Component, EventEmitter } from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <form id="input-form">
      <h3>Create a new keg: </h3>
      <div class="form-group">
        <input placeholder="Name" class="col-sm-8 input-lg form-control" #newKegName>
      </div>
        <div class="form-group">
          <input placeholder="Brand" class="col-sm-8 input-lg form-control" #newKegBrand>
        </div>
        <div class="form-group">
          <input placeholder="Price" class="col-sm-8 input-lg form-control" #newKegPrice>
        </div>
        <div class="form-group">
          <input placeholder="Alcohol" class="col-sm-8 input-lg form-control" #newKegAlcohol>
        </div>
      <button (click)="addKeg(newKegName, newKegBrand, newKegPrice, newKegAlcohol)" class="btn-success btn-lg add-button">Add</button>
    </form>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement) {
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userPrice.value, userAlcohol.value]);
    userName.value="";
    userBrand.value="";
    userPrice.value="";
    userAlcohol.value="";
  }
}
