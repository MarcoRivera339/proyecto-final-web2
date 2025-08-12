import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoContactoComponent } from './encabezado-contacto.component';

describe('EncabezadoContactoComponent', () => {
  let component: EncabezadoContactoComponent;
  let fixture: ComponentFixture<EncabezadoContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezadoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
