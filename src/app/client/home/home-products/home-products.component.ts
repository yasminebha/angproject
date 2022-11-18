import { Component, OnInit } from '@angular/core';
import { Client } from 'shared/models/client';
import { ProductService } from 'src/app/services/product.service';

import { Product } from 'src/app/shared/models/produit';



@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})



export class HomeProductsComponent implements OnInit {
  title = "PRODUITS";
  produits: Product[];// a retoucher
  selectedProd: Product;

  constructor(private productService: ProductService) {
    this.productService;
  }

  async getProducts(): Promise<void> {
    this.produits = await this.productService.getProducts();
  }



  ngOnInit(): void {
    this.getProducts();
  }

  onSelectedProd(p: Product): void {
    this.selectedProd = p;
  }



  onDetail(item: Product):void {
    alert(item.description)
  }



}

