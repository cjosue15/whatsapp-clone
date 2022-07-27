import React from 'react';

import style from './ChatHeader.module.scss';

import { UserImage } from '../../UserImage';

export const ChatHeader = () => {
  return (
    <header className={style.chatHeader}>
      <UserImage name='A' />
      <div className={style.chatHeader__description}>
        <span>Ale ❤</span>
      </div>
    </header>
  );
};
