import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeLocationComponent } from './personaje-location.component';

describe('PersonajeLocationComponent', () => {
  let component: PersonajeLocationComponent;
  let fixture: ComponentFixture<PersonajeLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeLocationComponent]
    });
    fixture = TestBed.createComponent(PersonajeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
