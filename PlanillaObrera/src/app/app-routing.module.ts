import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { LoginEmployeeComponent } from './login/login-employee/login-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './tables/employees/employees.component';
import { JobsComponent } from './tables/jobs/jobs.component';

import { AuthGuard } from './_helpers/auth.guard';
import { WelcomeAdminComponent } from './home/welcome-admin/welcome-admin.component';
import { WelcomeEmployeeComponent } from './home/welcome-employee/welcome-employee.component';
import { WeekPayrollComponent } from './tables/week-payroll/week-payroll.component';
import { MonthPayrollComponent } from './tables/month-payroll/month-payroll.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'loginAdmin', component: LoginAdminComponent},
  {path: 'loginEmployee', component: LoginEmployeeComponent},
  
  {path: 'Administrator', component: WelcomeAdminComponent,canActivate: [AuthGuard] ,children: [
    {path: 'employeeList', component: EmployeesComponent},
    {path: 'jobList', component: JobsComponent},
  ]},

  {path: 'Employee', component: WelcomeEmployeeComponent, canActivate: [AuthGuard],children: [
    {path: 'weekPayroll', component: WeekPayrollComponent},
    {path: 'monthPayroll', component: MonthPayrollComponent}
  ]},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
