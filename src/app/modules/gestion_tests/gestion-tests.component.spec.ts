import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTestsComponent } from './gestion-tests.component';

describe('GestionTestsComponent', () => {
  let component: GestionTestsComponent;
  let fixture: ComponentFixture<GestionTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
