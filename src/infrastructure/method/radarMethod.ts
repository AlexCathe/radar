import { Radar, radarInt } from "../../domain/entities/Radar";
import { Report } from "../../domain/entities/Report";
import { ReportMethods } from "./reportMethods";

export class RadarMethod implements radarInt {
    getAllReportsFromDate(date: Date,radar: Radar): Report[] {
        var reports: Report[] = [];

        var reportMethod = new ReportMethods();

        reports = radar.reports.filter(report => reportMethod.getReportByDate(date, report));
        return reports;
    }

    getAllReportsFromMonth(date: Date, radar: Radar): Report[] {
        var reports: Report[] = [];
        var reportMethod = new ReportMethods();

        reports = radar.reports.filter(report => reportMethod.getReportByMonth(date, report));

        return reports
    }
}
