import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageregisterComponent } from './pageregister.component';

describe('PageregisterComponent', () => {
  let component: PageregisterComponent;
  let fixture: ComponentFixture<PageregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
