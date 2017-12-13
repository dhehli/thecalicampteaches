import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-add-order',
  templateUrl: './order-add.component.html'
})
export class OrderAddMemberComponent implements OnInit {
  error = {};
  success: boolean;

  constructor() { }

  ngOnInit() {
  }

}
