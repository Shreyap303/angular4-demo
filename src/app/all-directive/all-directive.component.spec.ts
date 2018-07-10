import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDirectiveComponent } from './all-directive.component';

describe('AllDirectiveComponent', () => {
  let component: AllDirectiveComponent;
  let fixture: ComponentFixture<AllDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
