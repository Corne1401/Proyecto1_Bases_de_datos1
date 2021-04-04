import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';


@Component({
  selector: 'app-navbar-out',
  templateUrl: './navbar-out.component.html',
  styleUrls: ['./navbar-out.component.css']
})
export class NavbarOutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService

  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
  }

}
