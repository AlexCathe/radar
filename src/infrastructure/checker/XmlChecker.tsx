import { Radar } from "../../domain/entities/Radar";

export class XmlChecker {
    static checkXmlFormat(data: string) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "application/xml");
        var radar:Radar;
        const errorNode = doc.querySelector("parsererror");
        if (errorNode) {
            console.log("error while parsing");
          } else {
            console.log(doc.documentElement.nodeName);
          }
    }
}