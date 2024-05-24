import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepiplienneComponent } from './listepiplienne.component';

describe('ListepiplienneComponent', () => {
  let component: ListepiplienneComponent;
  let fixture: ComponentFixture<ListepiplienneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepiplienneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepiplienneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
