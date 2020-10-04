import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenuSubmenuItemComponent } from './sidebarmenu-submenu-item.component';

describe('SidebarmenuSubmenuItemComponent', () => {
  let component: SidebarmenuSubmenuItemComponent;
  let fixture: ComponentFixture<SidebarmenuSubmenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarmenuSubmenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmenuSubmenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
