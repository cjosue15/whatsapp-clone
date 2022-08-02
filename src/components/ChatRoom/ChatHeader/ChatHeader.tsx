import React from 'react';

import style from './ChatHeader.module.scss';

import { UserImage } from '../../UserImage';
import { useCurrentUser } from '../../../context';
import { getFirstLetter } from '../../../utils/functions';

export const ChatHeader = () => {
  const { selectedUser } = useCurrentUser();

  return (
    <header className={style.chatHeader}>
      <UserImage name={getFirstLetter(selectedUser?.name || '')} />
      <div className={style.chatHeader__description}>
        <span>{selectedUser?.name}</span>
      </div>
    </header>
  );
};
