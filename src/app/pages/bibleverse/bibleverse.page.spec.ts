import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibleversePage } from './bibleverse.page';

describe('BibleversePage', () => {
  let component: BibleversePage;
  let fixture: ComponentFixture<BibleversePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BibleversePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
