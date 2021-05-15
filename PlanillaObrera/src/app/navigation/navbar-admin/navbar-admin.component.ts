import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
  }

}
