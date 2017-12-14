import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from './order';
import { OrderServiceAdmin } from './order.service';

@Component({
  selector: 'admin-detail-order',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailAdminComponent implements OnInit {
  order: Order;

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


}
