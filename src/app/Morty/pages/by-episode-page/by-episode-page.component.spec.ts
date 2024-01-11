import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByEpisodePageComponent } from './by-episode-page.component';

describe('ByEpisodePageComponent', () => {
  let component: ByEpisodePageComponent;
  let fixture: ComponentFixture<ByEpisodePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByEpisodePageComponent]
    });
    fixture = TestBed.createComponent(ByEpisodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
