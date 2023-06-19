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
}

export interface radarInt {
    getAllReportsFromDate(date: Date, radar: Radar): Report[];
}