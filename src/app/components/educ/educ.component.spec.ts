import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducComponent } from './educ.component';

describe('EducComponent', () => {
  let component: EducComponent;
  let fixture: ComponentFixture<EducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducComponent]
    });
    fixture = TestBed.createComponent(EducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
