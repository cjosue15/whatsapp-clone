import { Component, HostBinding, Input } from '@angular/core';
import { ContactPictureComponent } from '@components/contact-picture';
import { Contact } from '@models/contact.model';

@Component({
  standalone: true,
  imports: [ContactPictureComponent],
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
