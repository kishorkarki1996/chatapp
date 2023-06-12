import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardListComponent } from './forward-list.component';

describe('ForwardListComponent', () => {
  let component: ForwardListComponent;
  let fixture: ComponentFixture<ForwardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForwardListComponent]
    });
    fixture = TestBed.createComponent(ForwardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
