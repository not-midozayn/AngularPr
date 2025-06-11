import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../Directives/highlight-card.directive';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {
  products:Iproduct[];
  Filteredproducts:Iproduct[];

  @Output() OntotalPriceChanged:EventEmitter<number>;
  purchasedQuantity:number = 0;
  @Input() CatIDfromParent:number = 0
  totalOrderPrice:number = 0;
  constructor(){
    this.OntotalPriceChanged = new EventEmitter<number>();
    this.products = [
      {id:100, name:'laptop', price:100000, stock:1, imgUrl:'https://cdn.mos.cms.futurecdn.net/Gw3Se82bvppoJsHc4rCVsQ.jpg', catId:1},
      {id:200, name:'tv', price:200000, stock:2, imgUrl:'https://i5.walmartimages.com/seo/SAMSUNG-32-Class-FHD-1080P-Smart-LED-TV-UN32N5300_2b2943fd-73d6-4d7b-9c54-e22db0c660f1_4.e79d68ec3a718064170de6cbd82e6030.jpeg', catId:1},
      {id:300, name:'phone', price:300000, stock:3, imgUrl:'https://shop.orange.eg/content/images/thumbs/0011717_iphone-16-pro-max_550.jpeg', catId:1},
      {id:400, name:'headphones', price:400000, stock:4, imgUrl:'https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg', catId:1},
      {id:500, name:'airpods', price:500000, stock:5, imgUrl:'https://m.media-amazon.com/images/I/61Z5J-fq7KL._AC_UF894,1000_QL80_.jpg', catId:2},
      {id:600, name:'charger', price:600000, stock:0, imgUrl:'https://i5.walmartimages.com/seo/TEYJRY-Charging-Station-for-Cell-Phones-Kit-2-Count_5e87d7ce-c1c2-481c-8d8d-de387ac5dff6.f2dc7bdc5ddf2a1dcaa602a2d236084c.jpeg', catId:2},
      {id:700, name:'cable', price:700000, stock:7, imgUrl:'https://cdn-eshop.jo.zain.com/images/thumbs/0073043_rockrose-arrow-am-24a-1m-micro-usb-charge-sync-cable_600.webp', catId:2},
      {id:800, name:'router', price:800000, stock:8, imgUrl:'https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/n/t/nt281-1.jpg', catId:2},
      {id:900, name:'powerbank', price:900000, stock:9, imgUrl:'https://cdn.sandberg.world/products/images/lg/420-75_lg.jpg', catId:3},
      {id:1000, name:'battery', price:1000000, stock:10, imgUrl:'https://batteryjoe.com/wp-content/uploads/2019/08/iphone7battery-1200x600.jpg', catId:3},
      {id:1100, name:'camera', price:1100000, stock:11, imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExEtIpdxQ4vvk5iZdcejgcXsiPs599UBWrg&s', catId:3}
    ];
    this.Filteredproducts = this.products;
  }
  ngOnChanges(){
      this.filterProducts();
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
  filterProducts(){
    if(this.CatIDfromParent == 0){
      this.Filteredproducts = this.products
    }
    else{
      this.Filteredproducts = this.products.filter(p=> p.catId == this.CatIDfromParent)
    }
  }
}
