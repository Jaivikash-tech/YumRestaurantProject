import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFood } from './edit-food';

describe('EditFood', () => {
  let component: EditFood;
  let fixture: ComponentFixture<EditFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFood],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
