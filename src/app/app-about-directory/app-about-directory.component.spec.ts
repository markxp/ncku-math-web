import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutDirectoryComponent } from './app-about-directory.component';

describe('AppAboutDirectoryComponent', () => {
  let component: AppAboutDirectoryComponent;
  let fixture: ComponentFixture<AppAboutDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAboutDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
