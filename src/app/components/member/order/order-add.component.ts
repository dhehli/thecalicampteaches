import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

import { Order } from './order';
import { OrderServiceMember } from './order.service';
import { VoucherServiceMember } from './voucher.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './order-add.component.html'
})
export class OrderAddMemberComponent implements OnInit {
  error = {};
  success: boolean;
  isSubmitting: boolean;
  isValidCode: boolean;
  showIsValidVoucher: boolean;
  voucherAmount: number;
  total: number;
  amount: number;

  constructor(
    private orderService: OrderServiceMember,
    private voucherServiceMember: VoucherServiceMember
  ) {
    this.isValidCode = false;
    this.showIsValidVoucher = false;
    this.voucherAmount = 0;
    this.amount = 49;
    this.total = 49;
  }

  ngOnInit() {}

  isValidVoucher(event) : void{
    const code = event.target.value
    this.showIsValidVoucher = true;

    this.voucherServiceMember.isValidVoucher(code)
    .subscribe(isValid => {
      const { isValidCode, voucherAmount } = isValid;
      this.isValidCode = isValidCode;

      if(voucherAmount){
        this.voucherAmount = voucherAmount;
      }else{
        this.voucherAmount = 0;
      }

      this.setCalculatTotal();
    });
  }

  setCalculatTotal() : number{
    return this.total = this.amount - this.voucherAmount;
  }

  add(title: string, userComment: string, code: string): void {
    this.isSubmitting = true;
    let formData = new FormData();

    let video = $("#video")[0].files[0];

    formData.append('video', video);
    formData.append('title', title);
    formData.append('userComment', userComment);
    formData.append('code', code);
    formData.append('state', "new");


    this.orderService.addOrder(formData)
    .subscribe(order => {
      this.isSubmitting = false;
      this.error = [];

      if(order.errors){
        order.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }
}
