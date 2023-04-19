import { Component, OnInit } from '@angular/core';
import { HeaderComponent, SidebarComponent } from './components';

@Component({
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  selector: 'w-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
