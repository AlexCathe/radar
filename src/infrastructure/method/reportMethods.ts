import { Report, reportInt } from "../../domain/entities/report";

export class ReportMethods implements reportInt {
    getReportByDate(date: Date, report: Report): boolean {
        if (date.getTime() === report.date.getTime()) {
            return true;
        }
        return false;
    }
    
}