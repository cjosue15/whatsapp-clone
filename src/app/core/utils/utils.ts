import { defer, from, Observable } from 'rxjs';

export const fromPromise = <T>(obs: Promise<T>): Observable<T> => {
  return defer(() => from(obs));
};

export const converSecondsToDate = (seconds: number): Date => {
  return new Date(seconds * 1000);
};

export const sameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const converDateToTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const isDateInThisWeek = (date: Date) => {
  const today = new Date();

  //Get the first day of the current week (Sunday)
  const firstDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay())
  );

  //Get the last day of the current week (Saturday)
  const lastDayOfWeek = new Date(
    today.setDate(today.getDate() - today.getDay() + 6)
  );

  //check if my value is between a minimum date and a maximum date
  return date >= firstDayOfWeek && date <= lastDayOfWeek;
};
