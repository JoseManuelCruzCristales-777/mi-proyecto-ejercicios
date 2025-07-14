import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerOverviewExample } from './ejercicio12';

describe('DividerOverviewExample', () => {
  let component: DividerOverviewExample;
  let fixture: ComponentFixture<DividerOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
