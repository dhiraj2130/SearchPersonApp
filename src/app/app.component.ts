import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  personList:Array<string> ;
  sampleArray= ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
  searchBy='';

  ngOnInit(_title_='AMP test application',_personList_= this.sampleArray){
    this.title = _title_;
    this.personList = _personList_;
    this.searchBy ='';
  }
}
