import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCallComponent } from './receive-call.component';

describe('ReceiveCallComponent', () => {
  let component: ReceiveCallComponent;
  let fixture: ComponentFixture<ReceiveCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveCallComponent]
    });
    fixture = TestBed.createComponent(ReceiveCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
