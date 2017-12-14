import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Order } from './order';
import { OrderServiceAdmin } from './order.service';

@Component({
  selector: 'admin-order',
  templateUrl: './order.component.html'
})
export class OrderAdminComponent implements OnInit {
  orders: Order[];

  constructor(
    private orderService: OrderServiceAdmin
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders({orderState: 'new'})
    .subscribe(order => this.orders = order);
  }

  delete(order: Order): void {
    this.orders = this.orders.filter(t => t !== order);
    this.orderService.deleteOrder(order).subscribe();
  }

}
