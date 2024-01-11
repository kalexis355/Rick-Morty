import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMortyComponent } from './cards-morty.component';

describe('CardsMortyComponent', () => {
  let component: CardsMortyComponent;
  let fixture: ComponentFixture<CardsMortyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsMortyComponent]
    });
    fixture = TestBed.createComponent(CardsMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
