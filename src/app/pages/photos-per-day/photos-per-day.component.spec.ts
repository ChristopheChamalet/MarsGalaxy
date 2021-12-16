import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPerDayComponent } from './photos-per-day.component';

describe('PhotosPerDayComponent', () => {
  let component: PhotosPerDayComponent;
  let fixture: ComponentFixture<PhotosPerDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosPerDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
