/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPersonPipePipe } from './filter-person-pipe.pipe';


describe('App: Searchapp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,FilterPersonPipePipe
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`should have as title 'AMP test application'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AMP test application');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AMP test application');
  }));

  it('should initialise app ',async(()=>{
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    var _personList:Array<string> = ['Sean','Yaw','Lucy','Eric'];
    var  _title:string = 'AMP test application';

    fixture.detectChanges();
    app.ngOnInit(_title,_personList);

    expect(app.personList).toBeDefined();
    expect(app.personList).toEqual(_personList);
    expect(app.title).toBeDefined();
    expect(app.title).toEqual(_title);

    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain(_title);
  }))

  it('should test the initial values set on view',async(()=>{
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    var _personList:Array<string> = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    var  _title:string = 'AMP test application';

    fixture.detectChanges();
    app.ngOnInit(_title,_personList);

    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('label').textContent).toEqual("Search Person:");
    expect(compiled.querySelectorAll('span.personstyle').length).toBe(6);
  }))

  it('should test the image set on view',async(()=>{
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    var _personList:Array<string> = ['Sean','Yaw','Lucy','Eric','Rory','Hayley'];
    var  _title:string = 'AMP test application';

    fixture.detectChanges();
    app.ngOnInit(_title,_personList);

    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('img').length).toBe(6);

    app.searchBy = "Sean";
    fixture.detectChanges();
    // filter is applied and only one image is available for display
    expect(compiled.querySelectorAll('img').length).toBe(1);
  }))
});

