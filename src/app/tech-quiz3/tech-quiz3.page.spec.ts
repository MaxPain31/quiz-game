import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechQuiz3Page } from './tech-quiz3.page';

describe('TechQuiz3Page', () => {
  let component: TechQuiz3Page;
  let fixture: ComponentFixture<TechQuiz3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechQuiz3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
