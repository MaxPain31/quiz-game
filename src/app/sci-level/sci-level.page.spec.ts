import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SciLevelPage } from './sci-level.page';

describe('SciLevelPage', () => {
  let component: SciLevelPage;
  let fixture: ComponentFixture<SciLevelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SciLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
