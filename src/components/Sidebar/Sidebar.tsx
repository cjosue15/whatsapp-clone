import React from 'react';

import style from './Sidebar.module.scss';

import { Header } from '../Header/Header';
import { Item } from '../Item';
import { useUserSocket } from '../../hooks/useUserSocket';
import { useCurrentUser } from '../../context';

export const Sidebar = () => {
  const { users } = useUserSocket();

  const { setSelectedUser, selectedUser } = useCurrentUser();

  return (
    <div className={style.sidebar}>
      <Header />
      {users.map((user) => (
        <Item
          key={user.id}
          onClickItem={() => setSelectedUser(user)}
          name={user.name}
          shortName={user.name[0].toUpperCase()}
          isHighlighted={selectedUser?.id === user.id}
        />
      ))}
    </div>
  );
};
