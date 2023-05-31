import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { ContactPictureComponent } from '@components/contact-picture';
import { AuthService } from '@core/services';

@Component({
  standalone: true,
  imports: [ContactPictureComponent, AsyncPipe],
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
