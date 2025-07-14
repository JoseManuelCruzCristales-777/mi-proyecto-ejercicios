import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletePlainInputExample  } from './ejercicio6';

describe('AutocompletePlainInputExample ', () => {
  let component: AutocompletePlainInputExample ;
  let fixture: ComponentFixture<AutocompletePlainInputExample >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompletePlainInputExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletePlainInputExample );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
