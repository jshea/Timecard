import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterTestingModule } from '@angular/router/testing';
import { AccrualComponent } from './accrual.component';
import { Accrual } from './../../shared/classes/accrual';

describe('TimecardComponent', () => {
  const accrual = new Accrual(285.6, 593, 8);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule
      ],
      declarations: [ AccrualComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));


  it('should create the Accrual component', async(() => {
    const fixture = TestBed.createComponent(AccrualComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));


  it(`should have week ending '2018-08-05'`, async(() => {
    const fixture = TestBed.createComponent(AccrualComponent);
    const component = fixture.debugElement.componentInstance;

    component.weekEndDate = '2018-08-05';       // Input value is ISO 8601 format
    fixture.detectChanges();                    // Trigger change detection

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Week ending 8/5/18');
  }));


  it(`should have Vacation of 285.6`, async(() => {
    const fixture = TestBed.createComponent(AccrualComponent);
    const component = fixture.debugElement.componentInstance;

    component.accrual = accrual;                // Seed test values
    fixture.detectChanges();                    // Trigger change detection

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-content').textContent).toContain('Vacation 285.6');
  }));


  it(`should have Sick of 593`, async(() => {
    const fixture = TestBed.createComponent(AccrualComponent);
    const component = fixture.debugElement.componentInstance;

    component.accrual = accrual;                // Seed test values
    fixture.detectChanges();                    // Trigger change detection

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-content').textContent).toContain('Sick 593');
  }));


  it(`should have Personal of 8`, async(() => {
    const fixture = TestBed.createComponent(AccrualComponent);
    const component = fixture.debugElement.componentInstance;

    component.accrual = accrual;                // Seed test values
    fixture.detectChanges();                    // Trigger change detection

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-content').textContent).toContain('Personal 8');
  }));

});
