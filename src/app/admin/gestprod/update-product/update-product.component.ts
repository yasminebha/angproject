import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }


  productUpdateForm: FormGroup;
  ngOnInit(): void {

    this.productUpdateForm = this.fb.group({
      nomControl: ["", [Validators.required]],
      prixControl: [0, [Validators.required]],
      descControl: ["", [Validators.required]],
      categControl: [NaN, [Validators.required]],
    })


    this.control = this.productUpdateForm.controls;



    const handleGetProduct = async (params) => {
      this.isLoaded = false
      this.item = await this.productService.getProductById(params.id)
      this.productUpdateForm.patchValue({
        nomControl: this.item.nom,
        prixControl: this.item.prix,
        descControl: this.item.description,
        categControl: this.item.category_id
      })
      this.categories = await this.categoryService.getCategories()
      this.isLoaded = true

    }


    this.route.params.subscribe(handleGetProduct)
  }
  
  async submit(): Promise<void> {
    const produit = new Product({
      nom: this.control["nomControl"].value,
      category_id: this.control["categControl"].value,
      prix: Number(this.control["prixControl"].value),
      description: this.control["descControl"].value,
      // image: this.imageFile,
    })
    try {
      await this.productService.updateProductById(this.item.id, produit)
      this.router.navigate(["/admin/product", this.item.id])
    }
    catch (e) {

    }


  }
}
