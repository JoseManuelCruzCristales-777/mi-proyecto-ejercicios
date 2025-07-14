import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimpleExample } from './ejercicio8';

describe('AutocompleteSimpleExample', () => {
  let component: AutocompleteSimpleExample;
  let fixture: ComponentFixture<AutocompleteSimpleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteSimpleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteSimpleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
