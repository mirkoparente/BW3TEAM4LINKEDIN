import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentiPostComponent } from './commenti-post.component';

describe('CommentiPostComponent', () => {
  let component: CommentiPostComponent;
  let fixture: ComponentFixture<CommentiPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentiPostComponent]
    });
    fixture = TestBed.createComponent(CommentiPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
