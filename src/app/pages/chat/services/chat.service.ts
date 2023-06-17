import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  orderBy,
  DocumentData,
  CollectionReference,
} from '@angular/fire/firestore';

import { query } from '@firebase/firestore';
import { Contact, Message } from '@models';
import { AuthService } from '@core/services';
import { fromPromise } from '@core/utils';

@Injectable({ providedIn: 'root' })
export class ChatService {
  contactSelected = new BehaviorSubject<Contact | null>(null);
  private authService = inject(AuthService);
  protected readonly firestore = inject(Firestore);

  get contactSelected$(): Observable<Contact | null> {
    return this.contactSelected.asObservable();
  }

  get contactSelectedUID(): string {
    return this.contactSelected.value?.uid || '';
  }

  messagesRef(from: string, to: string): CollectionReference<DocumentData> {
    return collection(
      this.firestore,
      `/users`,
      from,
      'contacts',
      to,
      'messages'
    );
  }

  changeContactSelected(user: Contact | null): void {
    this.contactSelected.next(user);
  }

  getMessageFromUserSelected(): Observable<Message[]> {
    return collectionData(
      query(
        this.messagesRef(
          this.authService.currentUserUID,
          this.contactSelectedUID
        ),
        orderBy('time')
      )
    ).pipe(
      map((messages): Message[] => {
        return messages.map((message) => ({
          from: message.from,
          message: message.message,
          time: message.time,
        }));
      })
    );
  }

  saveMessage(message: Message, from: string, to: string) {
    return fromPromise(addDoc(this.messagesRef(from, to), message));
  }

  sendMessage(messageToSave: Message) {
    return combineLatest([
      this.saveMessage(
        messageToSave,
        this.authService.currentUserUID,
        this.contactSelectedUID
      ),
      this.saveMessage(
        messageToSave,
        this.contactSelectedUID,
        this.authService.currentUserUID
      ),
    ]);
  }
}
