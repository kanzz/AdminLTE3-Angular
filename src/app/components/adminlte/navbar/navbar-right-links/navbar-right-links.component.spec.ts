import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRightLinksComponent } from './navbar-right-links.component';

describe('NavbarRightLinksComponent', () => {
  let component: NavbarRightLinksComponent;
  let fixture: ComponentFixture<NavbarRightLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRightLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRightLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
