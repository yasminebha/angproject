
import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-home-product-detail',
  templateUrl: './home-product-detail.component.html',
  styleUrls: ['./home-product-detail.component.css']
})
export class HomeProductDetailComponent implements OnInit {
 
  constructor() { 
  }
  
  ngOnInit(): void {
 
  };
  @Input() prod!: Product;
  }
