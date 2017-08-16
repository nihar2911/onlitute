import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachViewComponent } from './coach-view.component';

describe('CoachViewComponent', () => {
  let component: CoachViewComponent;
  let fixture: ComponentFixture<CoachViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
