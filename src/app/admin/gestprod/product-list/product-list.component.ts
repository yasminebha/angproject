import { Component, OnInit } from '@angular/core';
import { ProductService } from 'services/product.service';
import { Product } from 'shared/models/produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ps:ProductService) {
    this.ps;
   }
  products: Product[];// a retoucher


  ngOnInit(): void {
    this.getProducts();

  }
 async getProducts(): Promise<void> {
      this.products = await this.ps.getProducts();
    }
    
}
