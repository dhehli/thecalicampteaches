import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { LogoutService }   from './logout.service';

@Component({
  selector: 'link-logout',
  templateUrl: './logout.component.html'
})

export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private logoutService: LogoutService
  ) { }

  ngOnInit() {}

  logout(){
    console.log("logout")

    this.logoutService.logout()
    .then(response => {
      this.router.navigateByUrl('/login');
    })
    .catch(err => console.error(err))
   }
}
