import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuUserinfoComponent } from './sidebar-menu-userinfo.component';

describe('SidebarMenuUserinfoComponent', () => {
  let component: SidebarMenuUserinfoComponent;
  let fixture: ComponentFixture<SidebarMenuUserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMenuUserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
