import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLoginComponent } from './mat-login.component';

describe('MatLoginComponent', () => {
  let component: MatLoginComponent;
  let fixture: ComponentFixture<MatLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
