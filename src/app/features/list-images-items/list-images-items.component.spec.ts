import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagesItemsComponent } from './list-images-items.component';

describe('ListImagesItemsComponent', () => {
  let component: ListImagesItemsComponent;
  let fixture: ComponentFixture<ListImagesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImagesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImagesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
