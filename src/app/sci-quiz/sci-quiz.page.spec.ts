import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SciQuizPage } from './sci-quiz.page';

describe('SciQuizPage', () => {
  let component: SciQuizPage;
  let fixture: ComponentFixture<SciQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SciQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
