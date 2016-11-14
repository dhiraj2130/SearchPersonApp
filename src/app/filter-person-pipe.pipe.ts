import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPersonPipe'
})
export class FilterPersonPipePipe implements PipeTransform {

  transform(personList: string[], searchstring: string): string[] {
    return personList.filter((person) => searchstring ? (person.search(searchstring) > -1) :true
    );
  }

}
