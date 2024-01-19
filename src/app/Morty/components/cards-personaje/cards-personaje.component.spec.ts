import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPersonajeComponent } from './cards-personaje.component';

describe('CardsPersonajeComponent', () => {
  let component: CardsPersonajeComponent;
  let fixture: ComponentFixture<CardsPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPersonajeComponent]
    });
    fixture = TestBed.createComponent(CardsPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
