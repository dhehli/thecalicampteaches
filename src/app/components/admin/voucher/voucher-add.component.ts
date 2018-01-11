import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

import { Voucher } from './voucher';
import { VoucherService } from './voucher.service';

@Component({
  selector: 'app-voucher-add',
  templateUrl: './voucher-add.component.html'
})
export class VoucherAddComponent implements OnInit {
  error = {};
  success: boolean;
  isSubmitting: boolean;
  voucher: Voucher;

  constructor(
    private voucherService: VoucherService,
  ) { }

  ngOnInit() {

  }

  add(description: string, fromDate: string, toDate: string, code: string, amount: number): void {
    this.isSubmitting = true;

    let data = new Voucher(description, fromDate, toDate, code, amount);

    console.log(data)

    this.voucherService.addVoucher(data)
    .subscribe(voucher => {
      this.isSubmitting = false;
      this.error = [];

      if(voucher.errors){
        voucher.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
