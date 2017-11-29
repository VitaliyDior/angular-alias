import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordPlural'
})
export class WordPluralPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) {
      return 'no words';
    } else if (value === 1) {
      return '1 word';
    } else {
      return value + ' words';
    }
  }
}
