import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmenuMenuItemComponent } from './sidebarmenu-menu-item.component';

describe('SidebarmenuMenuItemComponent', () => {
  let component: SidebarmenuMenuItemComponent;
  let fixture: ComponentFixture<SidebarmenuMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarmenuMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmenuMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
