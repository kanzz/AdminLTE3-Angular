import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenuUserinfoComponent } from './sidebarmenu-userinfo.component';

describe('SidebarmenuUserinfoComponent', () => {
  let component: SidebarmenuUserinfoComponent;
  let fixture: ComponentFixture<SidebarmenuUserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarmenuUserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmenuUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
