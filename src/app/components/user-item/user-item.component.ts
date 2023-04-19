import { Component, HostBinding } from '@angular/core';
import { UserProfileComponent } from '@components/user-profile';

@Component({
  standalone: true,
  imports: [UserProfileComponent],
  selector: 'w-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent {
  @HostBinding('class.w-user-item') hostClass = true;
}
