import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOptgroupExample2 } from './ejercicio9';

describe('AutocompleteOptgroupExample2', () => {
  let component: AutocompleteOptgroupExample2;
  let fixture: ComponentFixture<AutocompleteOptgroupExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteOptgroupExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteOptgroupExample2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
