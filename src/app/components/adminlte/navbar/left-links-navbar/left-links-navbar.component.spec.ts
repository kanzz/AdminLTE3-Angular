import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLinksNavbarComponent } from './left-links-navbar.component';

describe('LeftLinksNavbarComponent', () => {
  let component: LeftLinksNavbarComponent;
  let fixture: ComponentFixture<LeftLinksNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftLinksNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftLinksNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
