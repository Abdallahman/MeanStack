import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPalyerlistComponent } from './admin-palyerlist.component';

describe('AdminPalyerlistComponent', () => {
  let component: AdminPalyerlistComponent;
  let fixture: ComponentFixture<AdminPalyerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPalyerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPalyerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
