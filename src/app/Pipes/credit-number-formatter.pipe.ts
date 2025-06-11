import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditNumberFormatter'
})
export class CreditNumberFormatterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
