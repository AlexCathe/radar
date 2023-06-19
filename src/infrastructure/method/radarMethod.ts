import { Radar, radarInt } from "../../domain/entities/radar";
import { Report } from "../../domain/entities/report";
import { ReportMethods } from "./reportMethods";

export class RadarMethod implements radarInt {
    getAllReportsFromDate(date: Date,radar: Radar): Report[] {
        var reports: Report[] = [];

        var reportMethod = new ReportMethods();

        reports = radar.reports.filter(report => reportMethod.getReportByDate(date, report));
        return reports;
    }
}
