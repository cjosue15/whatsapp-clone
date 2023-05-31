import { defer, from, Observable } from 'rxjs';

export const fromPromise = <T>(obs: Promise<T>): Observable<T> => {
  return defer(() => from(obs));
};
