import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatComponent } from '@components/chat';
import { ContactListComponent } from '@components/contact-list';
import { LayoutComponent } from '@core/layout/layout.component';

@Component({
  standalone: true,
  imports: [LayoutComponent, ContactListComponent, ChatComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-whatsapp';
}
