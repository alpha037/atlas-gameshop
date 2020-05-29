import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductQuantityComponent } from './cart-product-quantity.component';

describe('CartProductQuantityComponent', () => {
  let component: CartProductQuantityComponent;
  let fixture: ComponentFixture<CartProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
