import { Radar } from "../../domain/entities/Radar";
import { Report } from "../../domain/entities/Report";
import { Vehicle } from "../../domain/entities/Vehicle";

export class B612Format {
    static formatJson(data: string): Radar {
        const jsonData = JSON.parse(data);
        var reports:Report[] = new Array(jsonData.reports.length);
        jsonData.reports.forEach((report: any) => {
            var reportObject = new Report(parseInt(report.speed), new Date(report.date), new Vehicle(report.licensePlate, null, null), report.evidenceUrl)
            reports.push(reportObject);
        });
         var radar = new Radar(jsonData.localisation,reports ,jsonData.name,null)

         return radar
    }
}