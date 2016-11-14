/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FilterPersonPipePipe } from './filter-person-pipe.pipe';

describe('Pipe: FilterPersonPipe', () => {


  it('create an instance', () => {
    let pipe = new FilterPersonPipePipe();
    expect(pipe).toBeTruthy();

  });

  it('should filter list with a given name', async(() => {
    let pipe = new FilterPersonPipePipe();
    var personList = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    var filteredList = ['Sean'];
    expect(pipe.transform(personList,'Sean')).toEqual(filteredList);
  }));
});
