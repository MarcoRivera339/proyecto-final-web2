import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoRegistroComponent } from './encabezado-registro.component';

describe('EncabezadoRegistroComponent', () => {
  let component: EncabezadoRegistroComponent;
  let fixture: ComponentFixture<EncabezadoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezadoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
