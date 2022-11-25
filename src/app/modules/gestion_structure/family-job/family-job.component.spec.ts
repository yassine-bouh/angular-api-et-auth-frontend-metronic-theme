import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyJobComponent } from './family-job.component';

describe('FamilyJobComponent', () => {
  let component: FamilyJobComponent;
  let fixture: ComponentFixture<FamilyJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
