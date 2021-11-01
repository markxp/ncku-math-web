import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutListComponent } from './app-about-list.component';

describe('AppAboutListComponent', () => {
  let component: AppAboutListComponent;
  let fixture: ComponentFixture<AppAboutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAboutListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
