import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaContactoComponent } from './carta-contacto.component';

describe('CartaContactoComponent', () => {
  let component: CartaContactoComponent;
  let fixture: ComponentFixture<CartaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
