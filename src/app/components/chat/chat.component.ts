import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChatFooterComponent } from '@components/chat-footer';
import { MessageComponent } from '@components/message';
import { UserProfileComponent } from '@components/user-profile';
import { Message } from '@models/message.model';

@Component({
  standalone: true,
  imports: [NgFor, UserProfileComponent, MessageComponent, ChatFooterComponent],
  selector: 'w-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
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
