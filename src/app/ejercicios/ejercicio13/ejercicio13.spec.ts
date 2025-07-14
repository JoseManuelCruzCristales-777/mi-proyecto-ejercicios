import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFooterExample } from './ejercicio13';

describe('CardFooterExample', () => {
  let component: CardFooterExample;
  let fixture: ComponentFixture<CardFooterExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFooterExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFooterExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
