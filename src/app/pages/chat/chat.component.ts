import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services';

@Component({
  standalone: true,
  selector: 'w-chat-page',
  template: `<button (click)="logOut()">log out</button
    ><button (click)="move()">move</button>`,
})
export default class ChatPageComponent {
  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);

  logOut() {
    this.authService
      .logOut()
      .subscribe(() => this.router.navigateByUrl('/log-in'));
  }

  move() {
    this.router.navigateByUrl('/log-in');
  }
}
