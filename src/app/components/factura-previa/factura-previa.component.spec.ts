import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPreviaComponent } from './factura-previa.component';

describe('FacturaPreviaComponent', () => {
  let component: FacturaPreviaComponent;
  let fixture: ComponentFixture<FacturaPreviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaPreviaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacturaPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
