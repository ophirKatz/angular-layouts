import { Pipe, PipeTransform } from '@angular/core';

import { String } from 'typescript-string-operations';

@Pipe({
  name: 'stringFormat'
})
export class GenericStringFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return String.Format(value, ...args);
  }

}
