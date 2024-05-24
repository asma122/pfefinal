import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprojetComponent } from './dashboardprojet.component';

describe('DashboardprojetComponent', () => {
  let component: DashboardprojetComponent;
  let fixture: ComponentFixture<DashboardprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
