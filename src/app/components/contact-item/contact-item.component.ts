import { Component, HostBinding, Input } from '@angular/core';
import { UserProfileComponent } from '@components/user-profile';
import { Contact } from '@models/contact.model';

@Component({
  standalone: true,
  imports: [UserProfileComponent],
  selector: 'w-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
})
export class ContactItemComponent {
  @HostBinding('class.w-contact-item') hostClass = true;

  @Input() contactInfo: Contact = {
    name: '',
    lastMessage: '',
    time: '',
  };
}
