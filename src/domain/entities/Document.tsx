import { ImagePDF } from "./ImagePDF";
import { Page } from './Page';
import { Titre } from "./Titre";

export class Document {
    titre: Titre;
    logo: ImagePDF;
    pages: Page[];

    constructor(titre: Titre, logo: ImagePDF, pages: Page[]) {
        this.titre = titre;
        this.logo = logo;
        this.pages = pages;
    }
}