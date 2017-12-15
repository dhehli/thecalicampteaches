import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService }   from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  error = {};
  isSubmitting: false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.isSubmitting = true;

    const user = {
      email,
      password
    }

    this.loginService.login(user)
    .then(response => {
      this.isSubmitting = false;
      this.error = [];

      if(response.errors){
        response.errors.forEach(e => this.error[e.param] = e.msg);
      }else if(response && response.admin){
        this.router.navigateByUrl('/admin');
      }else{
        this.router.navigateByUrl('/member');
      }

    })
    .catch(err => console.error(err))
   }

}
