import { inject, Injectable } from '@angular/core';
import { Firestore, DocumentReference } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';

import { User } from '@core/models';
import { fromPromise } from '@core/utils';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  protected readonly firestore = inject(Firestore);
  protected readonly collectionReference = collection(this.firestore, '/users');

  saveUser(user: User): Observable<DocumentReference> {
    const docPromise = addDoc(this.collectionReference, user);
    return fromPromise<DocumentReference>(docPromise);
  }
}
