import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenewComponent } from './sidenew.component';

describe('SidenewComponent', () => {
  let component: SidenewComponent;
  let fixture: ComponentFixture<SidenewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenewComponent]
    });
    fixture = TestBed.createComponent(SidenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
