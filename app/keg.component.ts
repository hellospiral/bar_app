import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <table class="table">
      <tr>
        <td>
          <h3>{{ keg.name }}</h3>
        </td>
        <td>
          <h3>{{ keg.brand }}</h3>
        </td>
        <td>
          <h3>\${{ keg.price }}</h3>
        </td>
        <td>
          <h3>{{ keg.alcohol }}</h3>
        </td>
        <td>
          <h3>Remaining: {{ keg.pints }}</h3>
        </td>
        <td>
          <button (click)="sellPint(keg)" class="btn btn-primary">Sell Pint</button>
        </td>
      </tr>
    </table>
  `
})

export class KegComponent {
  public keg: Keg;
  sellPint(keg: Keg) {
    keg.pints -= 1;
  }
}
