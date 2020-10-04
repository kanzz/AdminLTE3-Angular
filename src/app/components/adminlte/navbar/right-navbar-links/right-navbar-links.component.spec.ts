import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavbarLinksComponent } from './right-navbar-links.component';

describe('RightNavbarLinksComponent', () => {
  let component: RightNavbarLinksComponent;
  let fixture: ComponentFixture<RightNavbarLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNavbarLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavbarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
