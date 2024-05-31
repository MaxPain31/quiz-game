import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScienceQuiz2Page } from './science-quiz2.page';

describe('ScienceQuiz2Page', () => {
  let component: ScienceQuiz2Page;
  let fixture: ComponentFixture<ScienceQuiz2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceQuiz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
