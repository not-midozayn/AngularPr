import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idToBdate'
})
export class IdToBdatePipe implements PipeTransform {

  transform():number {
    return null;
  }

}
