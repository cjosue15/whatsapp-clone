import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'w-sidebar',
  template: `<ng-content />`,
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
