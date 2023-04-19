import { Component } from '@angular/core';
import { ChatComponent } from '@components/chat';
import { UserListComponent } from '@components/user-list';
import { LayoutComponent } from '@core/layout/layout.component';

@Component({
  standalone: true,
  imports: [LayoutComponent, UserListComponent, ChatComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-whatsapp';
}
