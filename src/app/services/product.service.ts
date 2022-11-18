import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/produit';
import supabase from '../supabase';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  async getProductById(id: number): Promise<Product> {

    try {
      const { data, error } = await supabase
        .from("produits")
        .select("*")
        .eq("id", id)
        .single()

      if (error) {
        throw error
      }

      return data

    } catch (e) {
      throw e
    }

  }

  async getProducts(): Promise<Product[]> {
    try {
      const { data, error } = await supabase.from("produits").select()

      if (error) {
        throw error
      }

      return data

    } catch (e) {
      throw e
    }
  }

  async addProduct(item: Product): Promise<void> {

    if (item.image !== null) {


      const imgFile = item.image as File

      const path = `produits/${imgFile.name.split(".")[0]}_${(Math.random() + 1).toString(36).substring(7)}.${imgFile.name.split(".")[1]}`;


      const { error } = await supabase.storage
        .from("ang-project")
        .upload(path, imgFile, {
          cacheControl: '3600',
          upsert: false
        })


      if (error) {
        throw error
      }


      item.image = `${environment.supabase.storageUrl}/${path}`;

    }


    await supabase.from("produits").insert({
      nom: item.nom,
      description: item.description,
      prix: Number(item.prix),
      image: item.image,
      category_id: item.category_id
    })

  }

  async updateProductById(id: number, item: Product): Promise<void> {
    const { error } = await supabase.from("produits").update(item).eq("id", id)

    if (error)
      throw error

  }
  async deleteProductById(id: number): Promise<void> {
    const { error } = await supabase.from("produits").delete().eq("id", id)
    if (error)
      throw error

  }


}
