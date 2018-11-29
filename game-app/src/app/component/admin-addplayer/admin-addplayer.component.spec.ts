import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddplayerComponent } from './admin-addplayer.component';

describe('AdminAddplayerComponent', () => {
  let component: AdminAddplayerComponent;
  let fixture: ComponentFixture<AdminAddplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
