import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    { name: 'product1', price: 100 },
    { name: 'product2', price: 200 },
    { name: 'product3', price: 300 },
    { name: 'product4', price: 400 },
    { name: 'product5', price: 500 },
    { name: 'product6', price: 600 },
    { name: 'product7', price: 700 },
    { name: 'product8', price: 800 },
    { name: 'product9', price: 900 },
    { name: 'product10', price: 1000 },
  ];

  cart: any[] = [];
  total = 0;

  onProductAdded(p: any) {
    this.cart.push(p);
    this.total += p.price;
  }
  onProductUpdated(p: any, index: number) {
    this.products[index] = p;
  }
  onProductDeleted(index: number) {
    this.products.splice(index, 1);
  }
}
