
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponentComponent } from './table-component.component';

describe('TableComponentComponent', () => {
  let component: TableComponentComponent;
  let fixture: ComponentFixture<TableComponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
