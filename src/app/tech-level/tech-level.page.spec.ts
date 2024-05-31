import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechLevelPage } from './tech-level.page';

describe('TechLevelPage', () => {
  let component: TechLevelPage;
  let fixture: ComponentFixture<TechLevelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
