import {Injectable} from '@angular/core';
import {from} from "rxjs";
import {addYears,addMonths,differenceInDays,differenceInMonths,differenceInYears}from 'date-fns';


@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() {
  }

  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);


    const years = differenceInYears(now, diff);
    result.push(`${years} months`);
    if (years > 0) {
      diff = addYears(diff, years);
    }

    const months = differenceInMonths(now, diff);
    result.push(`${months} months`);
    if (months > 0) {
      diff = addMonths(diff, months);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }
    return result.join('');
  }
}
