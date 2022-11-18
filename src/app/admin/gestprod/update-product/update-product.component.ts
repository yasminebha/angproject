import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'services/category.service';
import { ProductService } from 'services/product.service';
import { Categorie } from 'shared/models/categorie';
import { Product } from 'shared/models/produit';
import { Control } from 'src/types';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  isLoaded = false
  control: Control
  item: Product
  categories: Array<Categorie> = []

  private imageFile: File
  productUpdateForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    // this.handleGetProduct = this.handleGetProduct.bind(this)
  }


  // This function invokes when the component has initlized
  ngOnInit(): void {

    // Initialize form goupe by defining the fields
    this.productUpdateForm = this.fb.group({
      nomControl: ["", [Validators.required]],
      prixControl: [0, [Validators.required]],
      descControl: ["", [Validators.required]],
      categControl: [NaN, [Validators.required]],
    })

    // Get group controlles 
    this.control = this.productUpdateForm.controls;

    // Subscribe means listening on a specific event, in this example the route changing triggers an event
    this.route.params.subscribe(this.handleGetProduct)
  }

  // Using arrow function is helpfull to get self class refrerance "this" or using .bind in the constructor
  private handleGetProduct = async (event) => {
    // Set isLoaded to false means data not loaded yet from the db
    // We can block the ui from any user interaction by showing loader/spinner, disable submit botton...
    this.isLoaded = false
    // Load categories from the db
    this.categories = await this.categoryService.getCategories()
    // Load the product by id from the db
    this.item = await this.productService.getProductById(event.id)
    // Update the form with the loaded product
    this.productUpdateForm.patchValue({
      nomControl: this.item.nom,
      prixControl: this.item.prix,
      descControl: this.item.description,
      categControl: this.item.category_id
    })
    // Set isLoaded to true means data is already loaded from the db.
    // We can activate back the ability to interact with the ui.
    this.isLoaded = true
  }

  async submit(): Promise<void> {
    try {
      const produit = new Product({
        nom: this.control["nomControl"].value,
        category_id: this.control["categControl"].value,
        prix: Number(this.control["prixControl"].value),
        description: this.control["descControl"].value,
        // image: this.imageFile,
      })

      // Take the update action
      await this.productService.updateProductById(this.item.id, produit)

      // redirect the ui after the update 
      this.router.navigate(['admin/products'])
    }
    catch (e) {
      // Handle the error
    }


  }
}
