import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodList } from './food-list';

describe('FoodList', () => {
  let component: FoodList;
  let fixture: ComponentFixture<FoodList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodList],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
