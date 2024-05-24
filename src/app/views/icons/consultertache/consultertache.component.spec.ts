import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultertacheComponent } from './consultertache.component';

describe('ConsultertacheComponent', () => {
  let component: ConsultertacheComponent;
  let fixture: ComponentFixture<ConsultertacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultertacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultertacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
