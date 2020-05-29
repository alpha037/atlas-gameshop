import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWarningComponent } from './dialog-warning.component';

describe('DialogWarningComponent', () => {
  let component: DialogWarningComponent;
  let fixture: ComponentFixture<DialogWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
