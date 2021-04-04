import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-navbar-in',
  templateUrl: './navbar-in.component.html',
  styleUrls: ['./navbar-in.component.css']
})
export class NavbarInComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
  }

}
