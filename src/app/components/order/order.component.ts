import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { Icategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, ProductsComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCategoryId: number = 0;
  categories: Icategory[] = [];
  total:number = 0;
  constructor() {
    this.categories = [
      { id: 0, name: 'All' },
      { id: 1, name: 'cat1' },
      { id: 2, name: 'cat2' },
      { id: 3, name: 'cat3' },
    ]
  }
  RecieveTotalPriceFromChild(eventData:number){
    this.total = eventData;
  }
}
