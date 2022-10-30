import { BaseModel } from "./base.model";

export class Categorie extends BaseModel {

    nom: string;
    
    constructor(args: Categorie) {
        super()
        this.nom = args.nom;
    }
}
