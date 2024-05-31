import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathQuizPage } from './math-quiz.page';

describe('MathQuizPage', () => {
  let component: MathQuizPage;
  let fixture: ComponentFixture<MathQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MathQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
