import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionSetComponent } from './reaction-set.component';

describe('ReactionSetComponent', () => {
  let component: ReactionSetComponent;
  let fixture: ComponentFixture<ReactionSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactionSetComponent]
    });
    fixture = TestBed.createComponent(ReactionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
