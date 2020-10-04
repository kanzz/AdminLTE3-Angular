import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLinksNavbarComponent } from './right-links-navbar.component';

describe('RightLinksNavbarComponent', () => {
  let component: RightLinksNavbarComponent;
  let fixture: ComponentFixture<RightLinksNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightLinksNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLinksNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
