import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficGastPersonaComponent } from './grafic-gast-persona.component';

describe('GraficGastPersonaComponent', () => {
  let component: GraficGastPersonaComponent;
  let fixture: ComponentFixture<GraficGastPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficGastPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficGastPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
