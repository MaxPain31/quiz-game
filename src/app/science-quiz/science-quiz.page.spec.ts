import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScienceQuizPage } from './science-quiz.page';

describe('ScienceQuizPage', () => {
  let component: ScienceQuizPage;
  let fixture: ComponentFixture<ScienceQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
