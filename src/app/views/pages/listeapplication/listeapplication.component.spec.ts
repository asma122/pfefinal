import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeapplicationComponent } from './listeapplication.component';

describe('ListeapplicationComponent', () => {
  let component: ListeapplicationComponent;
  let fixture: ComponentFixture<ListeapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
