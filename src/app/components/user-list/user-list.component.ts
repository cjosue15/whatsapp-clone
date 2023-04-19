import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { UserItemComponent } from '@components/user-item';

@Component({
  standalone: true,
  imports: [NgForOf, UserItemComponent],
  selector: 'w-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: any[] = [1, 2, 3, 4];

  constructor() {}

  ngOnInit() {}
}
