import { Injectable } from '@angular/core';
import { Categorie } from 'shared/models/categorie';
import supabase from '../supabase';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }


  async getCategoryById(id: number) {

  }

  async getCategories(): Promise<Array<Categorie>> {
    try {
      const { data, error } = await supabase.from("categories").select("*")

      if (error)
        throw error

      return data

    } catch (e) {
      throw e
    }
  }
}
