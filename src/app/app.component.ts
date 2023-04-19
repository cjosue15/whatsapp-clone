import { Component } from '@angular/core';
import { ChatComponent } from '@components/chat';
import { ContactListComponent } from '@components/contact-list';
import { LayoutComponent } from '@core/layout/layout.component';

@Component({
  standalone: true,
  imports: [LayoutComponent, ContactListComponent, ChatComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-whatsapp';
}
