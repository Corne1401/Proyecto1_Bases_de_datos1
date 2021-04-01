import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomeBannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
