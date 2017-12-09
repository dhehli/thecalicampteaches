import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ForgotPasswordService }   from './forgotpassword.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html'
})
export class ForgotpasswordComponent implements OnInit {
  error = {};
  success: boolean;

  constructor(
    private forgotPasswordService: ForgotPasswordService
  ) {  }

  ngOnInit() { }

  forgot(email: string){

    this.forgotPasswordService.forgot(email)
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
