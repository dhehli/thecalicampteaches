import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery'

import { Order } from './order';
import { OrderServiceAdmin } from './order.service';

@Component({
  selector: 'admin-detail-order',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailAdminComponent implements OnInit {
  order: Order;
  error = {};

  constructor(
    private orderService: OrderServiceAdmin,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = this.route.snapshot.paramMap.get('uid');
    this.orderService.getOrder(id)
      .subscribe(order => this.order = order[0]);
  }

  addComment(comment: string): void {
    const id = this.route.snapshot.paramMap.get('uid');
    this.orderService.updateOrder(id, comment)
      .subscribe(order => {
        this.error = [];

        if(order.errors){
          order.errors.forEach(e => this.error[e.param] = e.msg);
        }else{
          this.getOrder();
          $('#comment').val("");
        }
    });
  }

  deleteComment(commentId: string): void{
    const orderId = this.route.snapshot.paramMap.get('uid');

    this.orderService.deleteComment(orderId, commentId).subscribe();
    this.getOrder();
  }
}


// TODO:
/*
orderState update mit mail
*/
