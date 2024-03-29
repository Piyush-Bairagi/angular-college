import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsd'
})
export class InrToUsdPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
