import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutRulesComponent } from './app-about-rules.component';

describe('AppAboutRulesComponent', () => {
  let component: AppAboutRulesComponent;
  let fixture: ComponentFixture<AppAboutRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAboutRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
