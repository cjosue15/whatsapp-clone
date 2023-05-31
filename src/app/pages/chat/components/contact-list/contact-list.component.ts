import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Contact } from '@models/contact.model';

import { ContactItemComponent } from '../contact-item';

@Component({
  standalone: true,
  imports: [NgForOf, ContactItemComponent],
  selector: 'w-contact-list',
  template: `
    <div ariaLabel="Chat list">
      <w-contact-item
        *ngFor="let contact of contacts"
        [contactInfo]="contact"
      />
    </div>
  `,
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
    {
      name: 'Ale',
      time: '12:08 A.M.',
      lastMessage: 'Hey hola',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
