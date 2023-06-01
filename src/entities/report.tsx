import { Vehicle } from "./vehicle";

export class Report {
    speed: string|null;
    date: Date;
    evidenceUrl: string|null;
    vehicle: Vehicle;
    
    constructor(speed: string|null, date: Date, vehicle: Vehicle, evidenceUrl: string|null) {
            this.speed = speed;
            this.date = date;
            this.evidenceUrl = evidenceUrl;
            this.vehicle = vehicle;
    }

    getReportByDate(date: Date): boolean {
        if (date.getTime() === this.date.getTime()) {
            return true;
        }
        return false;
    }
}