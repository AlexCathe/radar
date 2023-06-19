import { Radar } from "../../domain/entities/radar";
import { Report } from "../../domain/entities/report";
import { Vehicle } from "../../domain/entities/vehicle";

export class AwesomeRadarFormat {
    static formatJson(data: string): Radar {
        const jsonData = JSON.parse(data);
        var reports:Report[] = new Array(jsonData.incidents.length);
        jsonData.incidents.forEach((report: any) => {
            var reportObject = new Report(null, new Date(report[1]), new Vehicle(report[0], null, null), null)
            reports.push(reportObject);
        });
         var radar = new Radar(jsonData.metadata.localisation,reports ,null,jsonData.metadata.speedThreshold, )

         return radar
    }
}