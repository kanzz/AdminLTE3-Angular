import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavbarLinksComponent } from './left-navbar-links.component';

describe('LeftNavbarLinksComponent', () => {
  let component: LeftNavbarLinksComponent;
  let fixture: ComponentFixture<LeftNavbarLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftNavbarLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
