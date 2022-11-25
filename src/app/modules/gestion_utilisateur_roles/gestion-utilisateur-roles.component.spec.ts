import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisateurRolesComponent } from './gestion-utilisateur-roles.component';

describe('GestionUtilisateurRolesComponent', () => {
  let component: GestionUtilisateurRolesComponent;
  let fixture: ComponentFixture<GestionUtilisateurRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUtilisateurRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUtilisateurRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
