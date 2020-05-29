import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFilterListComponent } from './mat-filter-list.component';

describe('MatFilterListComponent', () => {
  let component: MatFilterListComponent;
  let fixture: ComponentFixture<MatFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
