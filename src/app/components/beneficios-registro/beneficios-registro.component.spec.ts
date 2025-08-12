import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosRegistroComponent } from './beneficios-registro.component';

describe('BeneficiosRegistroComponent', () => {
  let component: BeneficiosRegistroComponent;
  let fixture: ComponentFixture<BeneficiosRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficiosRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
