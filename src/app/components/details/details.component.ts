import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../Services/static-products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId:number = 0
  product:Iproduct|null = null;
  constructor(private _activatedRoute: ActivatedRoute, private _staticProductService:StaticProductsService){

  }
  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._staticProductService.getProductById(this.currentId);
  }

}
