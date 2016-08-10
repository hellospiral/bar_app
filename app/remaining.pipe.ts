import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "remaining",
  pure: false
})

export class RemainingPipe implements PipeTransform {
  transform(input: Keg[], info){
    var desiredDisplay = info[0];
    var output: Keg[] = [];
    if (desiredDisplay === "lessThan10") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
