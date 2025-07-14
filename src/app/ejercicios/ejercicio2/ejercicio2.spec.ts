import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDisplayExample } from './ejercicio2';

describe('Ejercicio2', () => {
  let component:  AutocompleteDisplayExample;
  let fixture: ComponentFixture< AutocompleteDisplayExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AutocompleteDisplayExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent( AutocompleteDisplayExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
