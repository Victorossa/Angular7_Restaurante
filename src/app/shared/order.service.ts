import { Injectable } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData:Order;
  orderItem:OrderItem[];

  constructor() { }
}
