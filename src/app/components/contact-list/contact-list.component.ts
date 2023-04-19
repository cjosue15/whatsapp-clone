import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ContactItemComponent } from '@components/contact-item';

@Component({
  standalone: true,
  imports: [NgForOf, ContactItemComponent],
  selector: 'w-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  users: any[] = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {}
}
