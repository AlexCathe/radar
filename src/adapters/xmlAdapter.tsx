import { XmlChecker } from "../checker/XmlChecker";
import { Radar } from "../entities/radar";
import * as fs from 'fs';

export class XmlAdapter {
    static getDatasFromXML() : Array<Radar> {
        const datas: string[] = [];
        const radars: Array<Radar> = [];
   
        const dataXml = fs.readFileSync('../data/radar.xml', 'utf-8');
    
        datas.push(dataXml);
        datas.forEach(data => {
            // radars.push(XmlChecker.checkXmlFormat(data));
        })

        return radars;
    }
}