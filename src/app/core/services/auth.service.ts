import { inject, Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { User } from '@core/models';
import { fromPromise } from '@core/utils';

@Injectable({ providedIn: 'root' })
export class AuthService {
  protected readonly auth = inject(Auth);
  protected readonly fireApp = inject(FirebaseApp);

  protected readonly authState = authState(this.auth);

  get authState$() {
    return this.authState;
  }

  get currentUserUID(): string {
    return this.currentUser()?.uid || '';
  }

  logInWithEmailAndPassword(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return fromPromise<UserCredential>(
      signInWithEmailAndPassword(this.auth, email, password)
    );
  }

  createUser(user: User & { password: string }): Observable<UserCredential> {
    return fromPromise<UserCredential>(
      createUserWithEmailAndPassword(this.auth, user.email, user.password)
    );
  }

  currentUser() {
    return this.auth.currentUser;
  }

  logOut() {
    return fromPromise<void>(this.auth.signOut());
  }
}
