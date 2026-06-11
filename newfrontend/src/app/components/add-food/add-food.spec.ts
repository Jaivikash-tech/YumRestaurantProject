import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFood } from './add-food';

describe('AddFood', () => {
  let component: AddFood;
  let fixture: ComponentFixture<AddFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFood],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
