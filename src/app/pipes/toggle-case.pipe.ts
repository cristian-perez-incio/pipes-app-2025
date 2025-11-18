import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform(value: string, capitalized: boolean = true): string {
    return capitalized ? value.toUpperCase() : value.toLowerCase();
  }

}
