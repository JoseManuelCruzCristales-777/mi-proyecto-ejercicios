import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFilterExample} from './ejercicio3';

describe('AutocompleteFilterExample', () => {
  let component: AutocompleteFilterExample;
  let fixture: ComponentFixture<AutocompleteFilterExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteFilterExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteFilterExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
