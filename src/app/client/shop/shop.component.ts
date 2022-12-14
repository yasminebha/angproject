import { Component } from '@angular/core';
import { ProductService } from 'services/product.service';
import { Product } from 'shared/models/produit';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  title = "PRODUITS";
  produits: Product[];
  selectedProd: Product;
  isSelected:Boolean;

  constructor(private productService: ProductService) {
    this.productService;
  }

  async getProducts(): Promise<void> {
    this.produits = await this.productService.getProducts();
  }



  ngOnInit(): void {
    this.getProducts();
    this.isSelected=false
  }

  onSelectedProd(p: Product): void {
      this.selectedProd = p;
      this.isSelected =true;
   
    
    
  }



  onDetail(item: Product):void {
    alert(item.description)
  }

}
