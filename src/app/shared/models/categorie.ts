import { Produit } from "./produit";
export class Categorie {
    id?: string;
    nom?: string;
    product?:Produit;
    constructor(args: Categorie = {}) {
    this.id = args.id;
    this.nom = args.nom;
    this.product = args.product;
    }
}
