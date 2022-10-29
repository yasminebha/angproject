import { Component, OnInit } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/services/product.service';

import { Produit } from 'src/app/shared/models/produit';



@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})



export class HomeProductsComponent implements OnInit {
  title = "PRODUITS";
  produits :Produit[] ;// a retoucher
  selectedProd: Produit ;
  
  
 
  
  constructor(private productService:ProductService ){
    this.productService;
    
  }
  getProducts():void{
    
    this.produits= this.productService.getProducts();
  }
  
  
  
  ngOnInit(): void {
    this.getProducts();
  }
  onSelectedProd(p:Produit):void{
    this.selectedProd = p;
  }
 

  
  onDetail(item:any):any{
    alert(item.description)
  }



}

