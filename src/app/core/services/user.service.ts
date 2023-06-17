import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  DocumentReference,
  doc,
  getDoc,
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
  setDoc,
  getDocs,
  collectionData,
  collection,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';

import { User } from '@core/models';
import { converSecondsToDate, fromPromise } from '@core/utils';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { Contact } from '@models/contact.model';

const contactAdapter = (
  contact: QueryDocumentSnapshot<DocumentData>
): Contact => {
  const data = contact.data();

  return {
    uid: contact.id,
    countMessage: data.countMessage,
    lastMessageTime: converSecondsToDate(data.lastMessageTime?.seconds || 0),
    lastMessage: data.lastMessage,
    isReading: data.isReading,
    picture: data.picture,
    name: `${data.firstName} ${data.lastName}`,
  };
};

@Injectable({ providedIn: 'root' })
export class UserService {
  protected readonly firestore = inject(Firestore);
  protected readonly collectionReference = collection(this.firestore, '/users');

  private _docReference(uid: string): DocumentReference<DocumentData> {
    return doc(this.firestore, '/users', uid);
  }

  saveUser(user: User): Observable<void> {
    return fromPromise(setDoc(this._docReference(user.uid), user));
  }

  getUserInformation(uid: string): Observable<DocumentData> {
    const userRef = doc(this.firestore, `/users`, uid);
    const contactsRef = collection(this.firestore, `/users`, uid, 'contacts');

    const user$ = fromPromise<DocumentSnapshot<DocumentData>>(
      getDoc(userRef)
    ).pipe(map((data) => data.data()));
    const contactsList$ = fromPromise<QuerySnapshot<DocumentData>>(
      getDocs(contactsRef)
    ).pipe(map((data) => data.docs.map((contact) => contactAdapter(contact))));

    return combineLatest({
      user: user$,
      contacts: contactsList$,
    }).pipe(tap((value) => console.log(value)));
  }
}
