import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteOptgroupExample } from './ejercicio4';

describe('AutocompleteOptgroupExample', () => {
  let component: AutocompleteOptgroupExample;
  let fixture: ComponentFixture<AutocompleteOptgroupExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteOptgroupExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteOptgroupExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
