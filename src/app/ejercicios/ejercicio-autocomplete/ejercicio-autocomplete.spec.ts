import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioAutocompleteComponent } from './ejercicio-autocomplete';

describe('EjercicioAutocompleteComponent', () => {
  let component: EjercicioAutocompleteComponent;
  let fixture: ComponentFixture<EjercicioAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
