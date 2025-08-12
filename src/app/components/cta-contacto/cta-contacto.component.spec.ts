import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaContactoComponent } from './cta-contacto.component';

describe('CtaContactoComponent', () => {
  let component: CtaContactoComponent;
  let fixture: ComponentFixture<CtaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaContactoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
