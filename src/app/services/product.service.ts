import { Injectable } from '@angular/core';
import { CATALOGUE } from '../shared/models/mock-data/catalogue-produits';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts():Produit[]{
    return CATALOGUE;
  }

  constructor() { }
}
