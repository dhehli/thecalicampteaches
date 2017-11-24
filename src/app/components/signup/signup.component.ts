import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User }         from './user';
import { UserService }         from './user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  @Input() error = {};
  @Input() success: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,

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
        this.form.reset();
      }
    })
    .catch(err => console.error(err)))
   }

}
