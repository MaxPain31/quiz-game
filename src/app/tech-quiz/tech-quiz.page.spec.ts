import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechQuizPage } from './tech-quiz.page';

describe('TechQuizPage', () => {
  let component: TechQuizPage;
  let fixture: ComponentFixture<TechQuizPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
