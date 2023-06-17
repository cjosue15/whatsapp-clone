import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { skip, switchMap, tap } from 'rxjs';

import { LayoutComponent } from '@core/layout/layout.component';
import { AuthService, UserService } from '@core/services';

import { ChatFooterComponent } from './components/chat-footer';
import { ContactListComponent } from './components/contact-list';
import { ContactPictureComponent } from './components/contact-picture';
import { MessageComponent } from './components/message';
import { ChatService } from './services/chat.service';
import { Message } from '@models/message.model';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
    JsonPipe,
    LayoutComponent,
    ContactPictureComponent,
    MessageComponent,
    ChatFooterComponent,
    ContactListComponent,
  ],
  selector: 'w-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export default class ChatComponent {
  currentauthorID = 'carlos';

  authService = inject(AuthService);

  userService = inject(UserService);

  chatService = inject(ChatService);

  dataUser$ = this.authService.authState$.pipe(
    tap((value) => console.log(value)),
    switchMap((authState) =>
      this.userService.getUserInformation(authState?.uid || '')
    )
  );

  messages$ = this.chatService.contactSelected$.pipe(
    skip(1),
    switchMap(() => this.chatService.getMessageFromUserSelected())
  );

  sendMessage(message: string): void {
    const messageToSave: Message = {
      from: this.authService.currentUserUID,
      message,
      time: new Date(),
    };
    this.chatService.sendMessage(messageToSave).subscribe(console.log);
  }
}
