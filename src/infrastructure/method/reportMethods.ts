import { Report, reportInt } from "../../domain/entities/Report";

export class ReportMethods implements reportInt {
    getReportByDate(date: Date, report: Report): boolean {
        if (date.getTime() === report.date.getTime()) {
            return true;
        }
        return false;
    }

    getReportByMonth(date: Date, report: Report): boolean {
        if(date.getMonth() === report.date.getMonth() && date.getFullYear() === report.date.getFullYear()){
            return true
        }
        return false;
    }
    
}