import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() item: any;

  @Output() addToCart = new EventEmitter<any>();
  @Output() updateProduct = new EventEmitter<any>();
  @Output() deleteProduct = new EventEmitter<void>();

  isEditing = false;

  onAddToCart() {
    console.log('add to cart');
    this.addToCart.emit(this.item);
  }

  onUpdate() {
    this.isEditing = true;
  }

  onSave() {
    this.updateProduct.emit(this.item);
    this.isEditing = false;
  }

  onDelete() {
    this.deleteProduct.emit();
  }
}
