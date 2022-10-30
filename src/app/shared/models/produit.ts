import { BaseModel } from "./base.model";

export class Product extends BaseModel {

    nom: string;
    image?: string | File;
    prix: number;
    description?: string;
    category_id: string;


    constructor(args: Product) {
        super()
        this.nom = args.nom;
        this.image = args.image;
        this.prix = args.prix;
        this.category_id = args.category_id;
        this.description = args.description;
    }
}