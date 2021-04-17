import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { fakeBackendProvider } from './_helpers/fake-backend';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './_helpers/auth.interceptor'
import { ErrorInterceptor } from './_helpers/error.interceptor'

import { LoginComponent } from './login/login.component';
import { NavbarInComponent } from './navigation/navbar-in/navbar-in.component';
import { HomeComponent } from './home/home.component';
import { NavbarOutComponent } from './navigation/navbar-out/navbar-out.component';
import { EmployeesComponent } from './tables/employees/employees.component';
import { JobsComponent } from './tables/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarInComponent,
    HomeComponent,
    NavbarOutComponent,
    EmployeesComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


    //fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
