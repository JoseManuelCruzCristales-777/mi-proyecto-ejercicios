import { ComponentFixture, TestBed } from '@angular/core/testing';

import {   AutocompleteOverviewExample } from './ejercicio5';

describe('  AutocompleteOverviewExample', () => {
  let component:   AutocompleteOverviewExample;
  let fixture: ComponentFixture<  AutocompleteOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [  AutocompleteOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(  AutocompleteOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
