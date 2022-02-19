import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentResetComponent } from './assignment-reset.component';

describe('AssignmentResetComponent', () => {
  let component: AssignmentResetComponent;
  let fixture: ComponentFixture<AssignmentResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
