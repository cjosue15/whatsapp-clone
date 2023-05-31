import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Message } from '@models/message.model';
import { LayoutComponent } from '@core/layout/layout.component';
import { ContactPictureComponent } from './components/contact-picture';
import { MessageComponent } from './components/message';
import { ChatFooterComponent } from './components/chat-footer';
import { ContactListComponent } from './components/contact-list';

@Component({
  standalone: true,
  imports: [
    NgFor,
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
export default class ChatComponent implements OnInit {
  currentauthorID = 'carlos';

  messages: Message[] = [
    {
      authorID: 'ale',
      text: 'Test message',
    },
    {
      authorID: 'ale',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'ale',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
    {
      authorID: 'carlos',
      text: 'Test message',
    },
    {
      authorID: 'carlos',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'carlos',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
    {
      authorID: 'ale',
      text: 'Test message',
    },
    {
      authorID: 'ale',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'ale',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
    {
      authorID: 'carlos',
      text: 'Test message',
    },
    {
      authorID: 'carlos',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'carlos',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
    {
      authorID: 'ale',
      text: 'Test message',
    },
    {
      authorID: 'ale',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'ale',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
    {
      authorID: 'carlos',
      text: 'Test message',
    },
    {
      authorID: 'carlos',
      text: 'Test message with large message im not sure what i am doing rigth now but its ok i think :3',
    },
    {
      authorID: 'carlos',
      text: 'Hola Carlitos que tal como estas? Ahora como a las 6 paso por allá a buscar el pegamento mañana lo vienen a buscar temprano en mi casa a quien se lo vendí, te aviso',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
