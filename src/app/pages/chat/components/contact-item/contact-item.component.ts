import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { ContactPictureComponent } from '@components/contact-picture';
import { Contact } from '@models/contact.model';
import { DateMessagePipe } from './contact-date.pipe';

@Component({
  standalone: true,
  imports: [ContactPictureComponent, DateMessagePipe],
  selector: 'w-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss'],
  host: {
    '(click)': 'selected.emit(contactInfo)',
  },
})
export class ContactItemComponent {
  @HostBinding('class.w-contact-item') hostClass = true;

  @Input() contactInfo: Contact = {
    uid: '',
    name: '',
    lastMessage: '',
    lastMessageTime: new Date(),
  };

  @Output() selected = new EventEmitter<Contact>();
}
