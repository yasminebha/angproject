import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'services/product.service';
import { Product } from 'shared/models/produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ps:ProductService,
    private readonly router: Router) {
    this.ps;
   }
  products: Product[];// a retoucher
  isChecked=false;

  ngOnInit(): void {
    this.getProducts();

  }
 async getProducts(): Promise<void> {
      this.products = await this.ps.getProducts();
    }
  onDelete(prod):void{
    var result = confirm('Are you sure you want to delete this product')
    if (result == true){
      this.router.navigate(["admin/gestprod/products",prod.id,"delete"])
    }
    
   
  }
  toggleEditable(event){
    if ( event.target.checked ) {
      this.isChecked = true;
    }
    else this.isChecked=false;
  }
    
}
