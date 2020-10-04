import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBrandLogoComponent } from './sidebar-brand-logo.component';

describe('SidebarBrandLogoComponent', () => {
  let component: SidebarBrandLogoComponent;
  let fixture: ComponentFixture<SidebarBrandLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBrandLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBrandLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
