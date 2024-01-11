import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLocationsComponent } from './cards-locations.component';

describe('CardsLocationsComponent', () => {
  let component: CardsLocationsComponent;
  let fixture: ComponentFixture<CardsLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsLocationsComponent]
    });
    fixture = TestBed.createComponent(CardsLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
