import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CategoryService } from 'services/category.service';
import { ProductService } from 'services/product.service';
import { Categorie } from 'shared/models/categorie';
import { Product } from 'shared/models/produit';
import { Control } from 'src/types';



@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  nomControl = new FormControl("");
  prixControl = new FormControl("");
  descControl = new FormControl("");
  imageControl = new FormControl("");
  categControl = new FormControl("");

  productAddForm: FormGroup;
  control: Control
  categories: Array<Categorie> = []

  isLoading = false

  private imageFile: File

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
    private readonly routerService: Router) { }



  async ngOnInit() {


    // this.productAddForm = new FormGroup({
    // nomControl:new FormControl(""),
    // prixControl:new FormControl(""),
    // descControl:new FormControl(""),
    // imageControl:new FormControl(""),
    // categControl:new FormControl(""),
    // })

    // avant d'utiliser le form builder 
    this.productAddForm = this.fb.group({
      nomControl: ['', [Validators.required]],
      prixControl: ['', [Validators.required]],
      descControl: ['', [Validators.required]],
      imageControl: ['', [Validators.required]],
      categControl: ['', [Validators.required]],
    })


    this.categories = await this.categoryService.getCategories()

    // apres d'utiliser le form builder 
  }


  onImageChange($evt) {
    this.imageFile = $evt.target.files[0]
  }

  async submit(): Promise<void> {
    this.control = this.productAddForm.controls;

    //acceder aux valeurs apres l'usage de form group manuellement:
    // alert("nom du produit:"+this.control["nomControl"].value+
    // "\nprix: "+this.control["prixControl"].value+
    // "\ndescription: "+this.control["descControl"].value+
    // "\nimage :"+this.control["imageControl"].value+
    // "\ncategorie: "+this.control["categControl"].value)
    //alert(JSON.stringify(this.productAddForm.value));
    //afficher tous les valeurs des controles automatiquement dans un tableau 


    const produit = new Product({
      nom: this.control["nomControl"].value,
      category_id: this.control["categControl"].value,
      prix: Number(this.control["prixControl"].value),
      description: this.control["descControl"].value,
      image: this.imageFile,
    })


    try {
      this.isLoading = true

      // waiting till product will be created into the database
      await this.productService.addProduct(produit);

      this.isLoading = false

      // redirect after finishing the create process
      this.routerService.navigate(["admin/gestprod/products"])
    } catch (e) {
      console.log(e)
    }


  }

}
