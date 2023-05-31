import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WInputComponent } from '@components/input';
import { AuthService } from '@core/services';

@Component({
  standalone: true,
  imports: [WInputComponent, ReactiveFormsModule],
  selector: 'w-log-in',
  template: `
    <div class="w-log-in">
      <h1>Log in</h1>

      <div class="w-log-in__row">
        <w-input label="Email" [formControl]="emailControl" />
      </div>
      <div class="w-log-in__row">
        <w-input label="Password" [formControl]="passwordControl" />
      </div>
      <div class="w-log-in__row footer">
        <button (click)="logIn()">Log in</button>
        <button (click)="move()">Move</button>
      </div>
    </div>
  `,
  styleUrls: ['./log-in.component.scss'],
})
export default class LogInComponent {
  emailControl = new FormControl<string | null>(null, Validators.required);

  passwordControl = new FormControl<string | null>(null, Validators.required);

  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);

  logIn() {
    if (this.emailControl.invalid || this.passwordControl.invalid) return;
    this.authService
      .logInWithEmailAndPassword(
        this.emailControl.value || '',
        this.passwordControl.value || ''
      )
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

  move() {
    console.log('wird');
    this.router
      .navigateByUrl('/')
      .then((moved) => console.log(moved))
      .catch((error) => console.log(error));
  }
}
