import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditplayerComponent } from './admin-editplayer.component';

describe('AdminEditplayerComponent', () => {
  let component: AdminEditplayerComponent;
  let fixture: ComponentFixture<AdminEditplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
