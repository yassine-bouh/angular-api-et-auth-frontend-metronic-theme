import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPartenairesComponent } from './gestion-partenaires.component';

describe('GestionPartenairesComponent', () => {
  let component: GestionPartenairesComponent;
  let fixture: ComponentFixture<GestionPartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPartenairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
