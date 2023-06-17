import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { User } from '@core/models';
import { AuthService, UserService } from '@core/services';
import { Router } from '@angular/router';
import { WInputComponent } from '@components/input';
import { UserCredential } from '@angular/fire/auth';

interface FormSignIn {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, WInputComponent],
  selector: 'w-chat-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export default class SignInComponent {
  protected readonly authService = inject(AuthService);
  protected readonly userService = inject(UserService);
  protected readonly builder = inject(FormBuilder);
  protected readonly router = inject(Router);

  public form = this.builder.group<FormSignIn>({
    firstName: this.builder.control(null, Validators.required),
    lastName: this.builder.control(null, Validators.required),
    email: this.builder.control(null, Validators.required),
    password: this.builder.control(null, Validators.required),
  });

  createUser(): void {
    const valueForm = this.form.value;
    const user: User = {
      uid: '',
      email: valueForm.email || '',
      lastName: valueForm.lastName || '',
      firstName: valueForm.firstName || '',
    };

    this.authService
      .createUser({ ...user, password: valueForm.password || '' })
      .pipe(
        tap((userCreated: UserCredential) => {
          user.uid = userCreated.user.uid;
        }),
        switchMap(() => this.userService.saveUser(user))
      )
      .subscribe((value) => {
        this.router.navigateByUrl('/');
      });
  }
}
