import { Pipe, PipeTransform } from '@angular/core';
import { converDateToTime, sameDay } from '@core/utils';

@Pipe({
  standalone: true,
  name: 'dateMessage',
})
export class DateMessagePipe implements PipeTransform {
  transform(value: Date): string {
    const today = new Date();
    const isSameDay = sameDay(today, value);
    console.log({
      isSameDay,
    });

    return isSameDay ? converDateToTime(value) : '';
  }
}
