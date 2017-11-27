import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  error = {};

  constructor() { }

  ngOnInit() {
  }

  login(
    email: string,
    password: string,
  ): void {
    alert(email);
  }

}
