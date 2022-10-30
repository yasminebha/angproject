import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'services/product.service';
import { Product } from 'shared/models/produit';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  item: Product

  isLoaded: boolean = false

  constructor(private readonly productService: ProductService, private readonly router: ActivatedRoute) { }

  ngOnInit(): void {


    const handleGetProduct = async (params) => {
      this.isLoaded = false
      this.item = await this.productService.getProductById(params.id)
      this.isLoaded = true
    }


    this.router.params.subscribe(handleGetProduct)


  }

}
