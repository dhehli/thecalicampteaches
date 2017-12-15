import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Order } from './order';
import { OrderServiceMember } from './order.service';

@Component({
  selector: 'app-detail-order',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailMemberComponent implements OnInit {
  order: Order;

  constructor(
    private orderService: OrderServiceMember,
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
