import { TestBed, inject } from '@angular/core/testing';

import { RoomCategoryService } from './room-category.service';

describe('RoomCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomCategoryService]
    });
  });

  it('should be created', inject([RoomCategoryService], (service: RoomCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
