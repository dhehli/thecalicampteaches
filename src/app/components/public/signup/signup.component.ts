import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { UserService }   from './user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  error = {};
  success: boolean;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() { }

  add(
    salutation: string,
    lastname: string,
    firstname: string,
    email: string,
    password: string
  ): void {

    const user = {
      salutation,
      lastname,
      firstname,
      email,
      password
    }

    this.userService.addUser(user)
    .then(response => {
      this.error = [];

      if(response.errors){
        response.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    })
    .catch(err => console.error(err))
   }

}
