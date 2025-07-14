import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteRequireSelectionExample } from './ejercicio7';

describe('AutocompleteRequireSelectionExample', () => {
  let component: AutocompleteRequireSelectionExample;
  let fixture: ComponentFixture<AutocompleteRequireSelectionExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteRequireSelectionExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteRequireSelectionExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
