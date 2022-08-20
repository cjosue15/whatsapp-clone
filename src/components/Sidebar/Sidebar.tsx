import React from 'react';

import style from './Sidebar.module.scss';

import { Header } from '../Header/Header';
import { Item } from '../Item';
import { useSessionSocket } from '../../hooks';
import { useCurrentUser } from '../../context';

export const Sidebar = () => {
  const { sessions } = useSessionSocket();

  const { setSelectedUser, selectedUser } = useCurrentUser();

  return (
    <div className={style.sidebar}>
      <Header />
      {sessions.map((session) => (
        <Item
          key={session.sessionID}
          onClickItem={() => setSelectedUser(session)}
          name={session.user.name}
          shortName={session.user.name[0].toUpperCase()}
          isHighlighted={selectedUser?.id === session.user.id}
        />
      ))}
    </div>
  );
};
