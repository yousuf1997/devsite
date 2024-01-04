import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevInterviewGuideComponent } from './dev-interview-guide.component';

describe('DevInterviewGuideComponent', () => {
  let component: DevInterviewGuideComponent;
  let fixture: ComponentFixture<DevInterviewGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevInterviewGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevInterviewGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
