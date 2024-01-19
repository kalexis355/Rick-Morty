import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeEpisodeComponent } from './personaje-episode.component';

describe('PersonajeEpisodeComponent', () => {
  let component: PersonajeEpisodeComponent;
  let fixture: ComponentFixture<PersonajeEpisodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajeEpisodeComponent]
    });
    fixture = TestBed.createComponent(PersonajeEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
