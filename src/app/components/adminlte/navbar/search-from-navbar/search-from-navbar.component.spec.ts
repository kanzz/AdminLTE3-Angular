import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFromNavbarComponent } from './search-from-navbar.component';

describe('SearchFromNavbarComponent', () => {
  let component: SearchFromNavbarComponent;
  let fixture: ComponentFixture<SearchFromNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFromNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFromNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
