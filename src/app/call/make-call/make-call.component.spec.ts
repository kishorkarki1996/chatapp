import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCallComponent } from './make-call.component';

describe('MakeCallComponent', () => {
  let component: MakeCallComponent;
  let fixture: ComponentFixture<MakeCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakeCallComponent]
    });
    fixture = TestBed.createComponent(MakeCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
