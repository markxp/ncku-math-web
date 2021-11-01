import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutLocationComponent } from './app-about-location.component';

describe('AppAboutLocationComponent', () => {
  let component: AppAboutLocationComponent;
  let fixture: ComponentFixture<AppAboutLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAboutLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
