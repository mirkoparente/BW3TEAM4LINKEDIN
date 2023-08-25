import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaExpComponent } from './modifica-exp.component';

describe('ModificaExpComponent', () => {
  let component: ModificaExpComponent;
  let fixture: ComponentFixture<ModificaExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaExpComponent]
    });
    fixture = TestBed.createComponent(ModificaExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
