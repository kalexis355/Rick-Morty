import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEpisodesComponent } from './cards-episodes.component';

describe('CardsEpisodesComponent', () => {
  let component: CardsEpisodesComponent;
  let fixture: ComponentFixture<CardsEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsEpisodesComponent]
    });
    fixture = TestBed.createComponent(CardsEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
