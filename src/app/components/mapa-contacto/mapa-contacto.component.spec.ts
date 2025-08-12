import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaContactoComponent } from './mapa-contacto.component';

describe('MapaContactoComponent', () => {
  let component: MapaContactoComponent;
  let fixture: ComponentFixture<MapaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
