import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../Directives/highlight-card.directive';
import { StaticProductsService } from '../../Services/static-products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCardDirective, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  products: Iproduct[];
  Filteredproducts:Iproduct[];
  purchasedQuantity:number = 0;
  totalOrderPrice:number = 0;
  @Input() CatIDfromParent:number = 0
  @Output() OntotalPriceChanged:EventEmitter<number>;
  constructor(private _StaticProductsService:StaticProductsService){
    this.OntotalPriceChanged = new EventEmitter<number>();
    this.products = _StaticProductsService.getAllProducts();
    this.Filteredproducts = this.products;
  }
  ngOnChanges(){
      this.Filteredproducts = this._StaticProductsService.getProductsByCatId(this.CatIDfromParent);
  }

  buy(quantity:string, product:Iproduct, inputElement:HTMLInputElement){
    if (inputElement.valueAsNumber <=0){
      alert("Quantity can not be less than or equal to zero");
      inputElement.valueAsNumber = 1;
      return
    }
    else if(inputElement.valueAsNumber> product.stock) {
      alert("Quantity can not be more than stock");
      inputElement.valueAsNumber = 1;
      return
    }
    this.totalOrderPrice += Number(quantity)*product.price
    product.stock-= +quantity
    this.OntotalPriceChanged.emit(this.totalOrderPrice);
  }
  // filterProducts(){
  //   if(this.CatIDfromParent == 0){
  //     this.Filteredproducts = this.products
  //   }
  //   else{
  //     this.Filteredproducts = this.products.filter(p=> p.catId == this.CatIDfromParent)
  //   }
  // }
}
