import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from 'services/product.service';
import { Categorie } from 'shared/models/categorie';
import { Product } from 'shared/models/produit';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  isLoading = false
 
  productDeleteForm: FormGroup
  categories: Array<Categorie> = []

  constructor(
    private readonly productService: ProductService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {


    this.handleDeleteProduct = this.handleDeleteProduct.bind(this)

  }

  async ngOnInit(): Promise<void> {

    this.route.params.subscribe(this.handleDeleteProduct)
  }

  private async handleDeleteProduct(params) {
    try {

      await this.productService.deleteProductById(params.id)

      this.router.navigate(["admin/products"])
    } catch (e) {
      // Handle Error
    }
  }

}

