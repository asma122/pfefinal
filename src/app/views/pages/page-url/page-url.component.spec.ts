import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUrlComponent } from './page-url.component';

describe('PageUrlComponent', () => {
  let component: PageUrlComponent;
  let fixture: ComponentFixture<PageUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
