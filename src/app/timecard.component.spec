import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TimecardComponent } from './timecard.component';
describe('TimecardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TimecardComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TimecardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'tc'`, async(() => {
    const fixture = TestBed.createComponent(TimecardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tc');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TimecardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to tc!');
  }));
});
