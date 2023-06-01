import { Report } from "./report";

export class Radar {
    name: string|null;
    localisation: string|null;
    speedThreshold: number|null;
    reports: Report[];

    constructor(localisation: string|null, reports: Report[], name: string|null, speedThreshold: number|null,) {
        this.name = name;
        this.localisation = localisation;
        this.speedThreshold = speedThreshold;
        this.reports = reports;
    }

    public getAllReportsFromDate(date: Date): Report[] {
        var reports: Report[] = [];

        reports = this.reports.filter(report => report.getReportByDate(date));
        return reports;
    }
}