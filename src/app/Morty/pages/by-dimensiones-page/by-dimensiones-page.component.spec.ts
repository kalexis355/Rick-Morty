import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDimensionesPageComponent } from './by-dimensiones-page.component';

describe('ByDimensionesPageComponent', () => {
  let component: ByDimensionesPageComponent;
  let fixture: ComponentFixture<ByDimensionesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByDimensionesPageComponent]
    });
    fixture = TestBed.createComponent(ByDimensionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
