import { Radar } from '../entities/radar';
import * as data from '../data/radar2.json';
import * as data2 from '../data/radar.json'
import { Report } from '../entities/report';
import { Vehicle } from '../entities/vehicle';
import { JsonChecker } from '../checker/JsonChecker';

export class JsonAdapter {
    static getDatasFromJson(): Array<Radar> {
        const datas: string[] = []
        const radars: Array<Radar> = []
        datas.push(JSON.stringify(data));
        datas.push(JSON.stringify(data2));
        datas.forEach(data => {
            radars.push(JsonChecker.checkJsonFormat(data))

        })

        return radars;
   } 
}