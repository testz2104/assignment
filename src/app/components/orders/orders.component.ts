import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:any = [];
  photoTitle: String = "NO TITLE";
  imageUrl: String = "assets/img/not_found.png";

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

  openModal(order: any) {
    this.imageUrl = order.url;
    this.photoTitle = order.title;
    $("#overlay").addClass('show');
    $("#myModal").show();
  }

  closeModal() {
    $("#overlay").removeClass('show');
    $("#myModal").hide();
  }
}
