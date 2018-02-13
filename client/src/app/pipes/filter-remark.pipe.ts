import { Pipe, PipeTransform } from '@angular/core';
// MODELS
import { Remark } from '../models/Remark.model';

@Pipe({
  name: 'filterRemark',
  pure:false
})
export class FilterRemarkPipe implements PipeTransform {

  transform( items: Array<Remark>, pattern: string): Array<Remark> {
    if(!items) {return []; }
    if(!pattern) {return items; }
    const  myRegExp= new RegExp(pattern,'i');
    return items.filter(e=>{return e._location.name.match(myRegExp)});
    // return items.filter(e=>{return e._location.rating>parseInt(pattern)});

  }
}
