import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { LoginService }   from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  error = {};

  constructor(
    private router: Router,
    private loginService: LoginService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  login(
    email: string,
    password: string
  ): void {

    const user = {
      email,
      password
    }

    this.loginService.login(user)
    .then(response => {
      this.error = [];

      if(response.errors){
        response.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        console.log("success login");
        this.router.navigateByUrl('/member');
      }

    })
    .catch(err => console.error(err))
   }

}
