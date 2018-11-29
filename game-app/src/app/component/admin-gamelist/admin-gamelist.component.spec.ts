import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGamelistComponent } from './admin-gamelist.component';

describe('AdminGamelistComponent', () => {
  let component: AdminGamelistComponent;
  let fixture: ComponentFixture<AdminGamelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGamelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
