import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrincipleComponent } from './card-principle.component';

describe('CardPrincipleComponent', () => {
  let component: CardPrincipleComponent;
  let fixture: ComponentFixture<CardPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPrincipleComponent]
    });
    fixture = TestBed.createComponent(CardPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
