import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOVEDADESComponent } from './novedades.component';

describe('NOVEDADESComponent', () => {
  let component: NOVEDADESComponent;
  let fixture: ComponentFixture<NOVEDADESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOVEDADESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOVEDADESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
