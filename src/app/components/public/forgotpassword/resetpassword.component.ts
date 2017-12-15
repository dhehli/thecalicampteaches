import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResetPasswordService }   from './resetpassword.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html'
})
export class ResetpasswordComponent implements OnInit {
  showForm: boolean;
  success: boolean;
  isSubmitting: boolean;

  constructor(
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkHash();
  }

  checkHash(): void {
    const hash = this.route.snapshot.paramMap.get('hash');

    this.resetPasswordService.checkHash(hash)
    .then(visible => visible.showForm ? this.showForm = true : this.showForm = false);
  }

  resetPassword(password: string): void {
    this.isSubmitting = true;
    const hash = this.route.snapshot.paramMap.get('hash');


    this.resetPasswordService.resetPassword(hash, password)
    .then(reseted => {
      this.isSubmitting = false;
      return reseted.updated ? this.success = true : this.success = false;
    })
  }
}
