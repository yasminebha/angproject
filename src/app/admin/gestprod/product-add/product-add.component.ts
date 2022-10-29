import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';


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

  productAddForm : FormGroup ;

    

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // this.productAddForm = new FormGroup({
    // nomControl:new FormControl(""),
    // prixControl:new FormControl(""),
    // descControl:new FormControl(""),
    // imageControl:new FormControl(""),
    // categControl:new FormControl(""),
    // })
    //avant d'utiliser le form builder 
    this.productAddForm = this.fb.group ({
      nameControl: [''],
      prixControl: [''],
      descControl: [''],
      imageControl: [''],
      categControl: [''],
    
      })
      //apres d'utiliser le form builder 
  }
  addProd():void{
    //acceder aux valeurs apres l'usage de form group manuellement:
    // alert("nom du produit:"+this.control["nomControl"].value+
    // "\nprix: "+this.control["prixControl"].value+
    // "\ndescription: "+this.control["descControl"].value+
    // "\nimage :"+this.control["imageControl"].value+
    // "\ncategorie: "+this.control["categControl"].value)
    alert(JSON.stringify(this.productAddForm.value));//afficher tous les valeurs des controles automatiquement dans un tableau 

  }

}
