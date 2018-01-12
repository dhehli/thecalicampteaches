import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment-es6';

import { Voucher } from './voucher';
import { VoucherService } from './voucher.service';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html'
})
export class VoucherDetailComponent implements OnInit {
  voucher: Voucher;
  error = {};
  success: boolean;
  isSubmitting: boolean;

  constructor(
    private voucherService: VoucherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getVoucher();
  }

  getVoucher(): void {
    const id = this.route.snapshot.paramMap.get('uid');

    this.voucherService.getVoucher(id)
      .subscribe(voucher => {
        voucher.fromDate = this.setDateAsString(voucher.fromDate)
        voucher.toDate = this.setDateAsString(voucher.toDate)

        this.voucher = voucher;
      });
  }

  update(): void {
    this.isSubmitting = true;

    this.voucherService.updateVoucher(this.voucher)
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

  setDateAsString(date: string): string{
    return moment(date).format('YYYY-MM-DD');
  }

}
