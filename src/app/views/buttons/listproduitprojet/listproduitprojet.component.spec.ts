import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproduitprojetComponent } from './listproduitprojet.component';

describe('ListproduitprojetComponent', () => {
  let component: ListproduitprojetComponent;
  let fixture: ComponentFixture<ListproduitprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproduitprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproduitprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
