import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

import { Order } from './order';
import { OrderServiceMember } from './order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './order-add.component.html'
})
export class OrderAddMemberComponent implements OnInit {
  error = {};
  success: boolean;
  isSubmitting: boolean;

  constructor(
    private orderService: OrderServiceMember
  ) { }

  ngOnInit() {
  }

  add(title: string, userComment: string): void {
    this.isSubmitting = true;
    let formData = new FormData();

    let video = $("#video")[0].files[0];

    formData.append('video', video);
    formData.append('title', title);
    formData.append('userComment', userComment);
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
