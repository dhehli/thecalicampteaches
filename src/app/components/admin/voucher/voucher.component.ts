import { Component, OnInit } from '@angular/core';

import { Voucher } from './voucher';
import { VoucherService } from './voucher.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html'
})
export class VoucherComponent implements OnInit {
  vouchers: Voucher[];

  constructor(
    private voucherService: VoucherService
  ) { }

  ngOnInit() {
    this.getVouchers();
  }

  getVouchers(): void {
    this.voucherService.getVouchers()
    .subscribe(vouchers => this.vouchers = vouchers);
  }

  delete(voucher: Voucher): void {
    this.vouchers = this.vouchers.filter(t => t !== voucher);
    this.voucherService.deleteVoucher(voucher).subscribe();
  }

}
