import { Component, HostBinding, inject } from '@angular/core';
import { AuthService } from '@core/services';

import { ContactPictureComponent } from '@components/contact-picture';

@Component({
  standalone: true,
  imports: [ContactPictureComponent],
  selector: 'w-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostBinding('class.w-header') hostClass = true;

  authService = inject(AuthService);

  logOut(): void {
    this.authService.logOut().subscribe(() => {
      console.log('logout');
    });
  }
}
