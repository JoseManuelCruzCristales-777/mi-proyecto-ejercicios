import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSimpleExample2  } from './ejercicio10';

describe('AutocompleteSimpleExample2 ', () => {
  let component: AutocompleteSimpleExample2 ;
  let fixture: ComponentFixture<AutocompleteSimpleExample2 >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteSimpleExample2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteSimpleExample2 );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
