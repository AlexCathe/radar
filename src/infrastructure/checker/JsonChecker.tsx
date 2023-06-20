import { Radar } from "../../domain/entities/Radar";
import { AwesomeRadarFormat } from "../format/AwesomeRadarFormat"
import { B612Format } from "../format/B612Format";

export class JsonChecker {

    static checkJsonFormat(data: string) {
        const jsonData = JSON.parse(data);
        var radar:Radar;
        if(jsonData.hasOwnProperty('incidents')){
            radar = AwesomeRadarFormat.formatJson(data)
        }
        else{
            radar = B612Format.formatJson(data)
        }

        return radar;
        
    }
}