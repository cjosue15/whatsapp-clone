import React from 'react';

import style from './ChatRoom.module.scss';

import { ChatHeader } from './ChatHeader';
import { ChatList } from './ChatList';
import { ChatInput } from './ChatInput';

export const ChatRoom = () => {
  return (
    <>
      <div className={style.chatRoom}>
        <div
          className={style.chatRoom__bg}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background-chat.png)` }}
        ></div>
        <ChatHeader />
        <ChatList />
        <ChatInput />
      </div>
    </>
  );
};
