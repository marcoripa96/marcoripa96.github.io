import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(value: number): any {
    return [...Array(value).keys()];
  }

}


@NgModule({
  declarations: [ToArrayPipe],
  exports:[ToArrayPipe]
 })
 export class ToArrayPipeModule{}