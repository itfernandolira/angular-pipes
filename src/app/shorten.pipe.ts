import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (args[0])
      return value.substring(0,value.length-6)+args[0];
    else
      return value.substring(0,value.length-6)
  }

}
