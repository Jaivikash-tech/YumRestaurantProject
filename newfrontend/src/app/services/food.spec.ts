import { TestBed } from '@angular/core/testing';

import { Food } from './food';

describe('Food', () => {
  let service: Food;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Food);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
