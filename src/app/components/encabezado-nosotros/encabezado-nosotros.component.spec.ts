import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoNosotrosComponent } from './encabezado-nosotros.component';

describe('EncabezadoNosotrosComponent', () => {
  let component: EncabezadoNosotrosComponent;
  let fixture: ComponentFixture<EncabezadoNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncabezadoNosotrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncabezadoNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
