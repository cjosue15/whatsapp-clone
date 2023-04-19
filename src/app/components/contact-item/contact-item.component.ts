import { Component, HostBinding } from '@angular/core';
import { UserProfileComponent } from '@components/user-profile';

@Component({
  standalone: true,
  imports: [UserProfileComponent],
  selector: 'w-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @HostBinding('class.w-contact-item') hostClass = true;
}
