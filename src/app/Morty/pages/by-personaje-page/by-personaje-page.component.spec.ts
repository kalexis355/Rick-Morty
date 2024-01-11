import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPersonajePageComponent } from './by-personaje-page.component';

describe('ByPersonajePageComponent', () => {
  let component: ByPersonajePageComponent;
  let fixture: ComponentFixture<ByPersonajePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByPersonajePageComponent]
    });
    fixture = TestBed.createComponent(ByPersonajePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
