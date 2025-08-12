import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresListaComponent } from './valores-lista.component';

describe('ValoresListaComponent', () => {
  let component: ValoresListaComponent;
  let fixture: ComponentFixture<ValoresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
