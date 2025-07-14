import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewExample } from './ejercicio11';

describe('DialogOverviewExample', () => {
  let component: DialogOverviewExample;
  let fixture: ComponentFixture<DialogOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
