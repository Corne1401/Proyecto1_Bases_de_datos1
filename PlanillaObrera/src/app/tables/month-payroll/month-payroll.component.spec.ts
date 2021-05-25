import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPayrollComponent } from './month-payroll.component';

describe('MonthPayrollComponent', () => {
  let component: MonthPayrollComponent;
  let fixture: ComponentFixture<MonthPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
