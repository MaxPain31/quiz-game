import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechQuiz2Page } from './tech-quiz2.page';

describe('TechQuiz2Page', () => {
  let component: TechQuiz2Page;
  let fixture: ComponentFixture<TechQuiz2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechQuiz2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
