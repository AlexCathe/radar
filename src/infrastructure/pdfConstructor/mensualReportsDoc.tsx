import { Document } from "../../domain/entities/Document"
import { ImagePDF } from "../../domain/entities/ImagePDF";
import { Page } from "../../domain/entities/Page";
import { Titre } from "../../domain/entities/Titre";
import { Report } from "../../domain/entities/Report";

export class mensualReportsDoc {

    static createDocument(contenu: Report[]) {

        const pages = [];
        const titre = new Titre("Incidents", "50%", "50%");
        const logo = new ImagePDF("100%", "0%", "gouv.png");
        const premierePage = new Page([{ titre: titre, logo: logo }]);
        pages.push(premierePage);

        if (contenu.length != 0) {
            pages.push(mensualReportsDoc.chunck(contenu).map((page) => {
                console.log(page)
                return new Page(page)
            }))
        }
        const nbIncidents = contenu.length;
        const dernierePage = new Page([{ nbIncident: nbIncidents }]);
        pages.push(dernierePage);

        return new Document(titre, logo, pages)
    }

    static chunck(reports: Report[]): Report[][] {
        var contenuActuel = []
        var reportsArray = []
        for (let indexReport = 0; indexReport < reports.length; indexReport++) {
            console.log(indexReport)
            contenuActuel.push(reports[indexReport])
            if ((indexReport+1) % 10 == 0 && indexReport != 0 || !reports[indexReport + 1]) {
                console.log("ça passe")
                console.log(indexReport)
                reportsArray.push(contenuActuel);
                contenuActuel = []
            }
        }
        return reportsArray;
    }
}