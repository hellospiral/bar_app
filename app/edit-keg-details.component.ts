import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <form class="form-inline">
    <div class="form-group">
      <h3>Edit Name:</h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg task-form form-control">
      <h3>Edit Brand:</h3>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg task-form form-control">
      <h3>Edit Price:</h3>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg task-form form-control">
      <h3>Edit Alcohol:</h3>
      <input [(ngModel)]="keg.alcohol" class="col-sm-8 input-lg task-form form-control">
    </div>
  </form>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
