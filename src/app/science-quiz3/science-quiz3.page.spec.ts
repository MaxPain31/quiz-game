import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScienceQuiz3Page } from './science-quiz3.page';

describe('ScienceQuiz3Page', () => {
  let component: ScienceQuiz3Page;
  let fixture: ComponentFixture<ScienceQuiz3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceQuiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
