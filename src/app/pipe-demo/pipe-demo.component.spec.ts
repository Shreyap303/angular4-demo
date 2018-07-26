import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemoComponent } from './pipe-demo.component';
import { ShorttextPipe } from '../pipe/shorttext.pipe';
import { FormsModule } from '../../../node_modules/@angular/forms';

describe('PipeDemoComponent', () => {
  let component: PipeDemoComponent;
  let fixture: ComponentFixture<PipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDemoComponent, ShorttextPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
