import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component'

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}</h3>
  `
})

export class KegComponent {
  public keg: Keg;
}
