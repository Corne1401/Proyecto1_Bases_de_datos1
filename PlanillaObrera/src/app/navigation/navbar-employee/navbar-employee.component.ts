import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-navbar-employee',
  templateUrl: './navbar-employee.component.html',
  styleUrls: ['./navbar-employee.component.css']
})
export class NavbarEmployeeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
  }

}
