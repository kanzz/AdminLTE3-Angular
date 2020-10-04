import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeftLinksComponent } from './navbar-left-links.component';

describe('NavbarLeftLinksComponent', () => {
  let component: NavbarLeftLinksComponent;
  let fixture: ComponentFixture<NavbarLeftLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLeftLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLeftLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
