import { Component, inject, Input, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Contact } from '@models/contact.model';

import { ContactItemComponent } from '../contact-item';
import { ChatService } from '@pages/chat/services/chat.service';

@Component({
  standalone: true,
  imports: [NgForOf, ContactItemComponent],
  selector: 'w-contact-list',
  template: `
    <div ariaLabel="Chat list">
      <w-contact-item
        *ngFor="let contact of contacts"
        [contactInfo]="contact"
        (selected)="selectedContact($event)"
      />
    </div>
  `,
})
export class ContactListComponent {
  @Input() contacts: Contact[] = [];

  private _chatService = inject(ChatService);

  selectedContact(contact: Contact): void {
    this._chatService.changeContactSelected(contact);
  }
}
