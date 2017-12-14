import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Order } from './order';
import { OrderServiceMember } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderMemberComponent implements OnInit {
  orders: Order[];

  constructor(
    private orderService: OrderServiceMember
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders()
    .subscribe(order => this.orders = order);
  }

  delete(order: Order): void {
    this.orders = this.orders.filter(t => t !== order);
    this.orderService.deleteOrder(order).subscribe();
  }

}
