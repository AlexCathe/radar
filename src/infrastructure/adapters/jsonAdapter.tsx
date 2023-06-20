import { Radar } from '../../domain/entities/Radar';
import * as data from '../data/radar2.json';
import * as data2 from '../data/radar.json';
import { JsonChecker } from '../checker/JsonChecker';
import { radarRepositoryInt } from '../../domain/repository/radarRepositoryInt';

export class JsonAdapter implements radarRepositoryInt{
    getAllRadar(): Array<Radar> {
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