import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPayrollComponent } from './week-payroll.component';

describe('WeekPayrollComponent', () => {
  let component: WeekPayrollComponent;
  let fixture: ComponentFixture<WeekPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
