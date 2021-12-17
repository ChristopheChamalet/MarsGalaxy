import { TestBed } from '@angular/core/testing';

import { MyGalleryService } from './core/services/my-gallery.service';

describe('MyGalleryService', () => {
  let service: MyGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
