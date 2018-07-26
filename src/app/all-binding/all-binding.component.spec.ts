import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBindingComponent } from './all-binding.component';
import { FormsModule } from '@angular/forms';

describe('AllBindingComponent', () => {
  let component: AllBindingComponent;
  let fixture: ComponentFixture<AllBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBindingComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
