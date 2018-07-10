import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorttext'
})
export class ShorttextPipe implements PipeTransform {

  transform(value: string, length?: number): any {
    if (!value) {
      return null;
    }
    const setlength = (length) ? length : 30;
    return value.substr(0, setlength) + '...';
  }

}
