import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonajeLocationComponent } from './card-personaje-location.component';

describe('CardPersonajeLocationComponent', () => {
  let component: CardPersonajeLocationComponent;
  let fixture: ComponentFixture<CardPersonajeLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPersonajeLocationComponent]
    });
    fixture = TestBed.createComponent(CardPersonajeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
