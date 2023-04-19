import { Component, HostBinding, OnInit } from '@angular/core';
import { ContactPictureComponent } from '@components/contact-picture';

@Component({
  standalone: true,
  imports: [ContactPictureComponent],
  selector: 'w-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.w-header') hostClass = true;

  constructor() {}

  ngOnInit() {}
}
