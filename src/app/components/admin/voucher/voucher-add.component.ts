import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  add(description: string, fromDate: string, toDate: string, code: string, amount: number, onlineState: boolean): void {
    this.isSubmitting = true;

    this.voucher = new Voucher(
      description,
      fromDate,
      toDate,
      code,
      amount,
      onlineState
    );

    this.voucherService.addVoucher(this.voucher)
    .subscribe(voucher => {
      this.isSubmitting = false;
      this.error = [];

      if(voucher.errors){
        console.log(voucher.errors)
        voucher.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
