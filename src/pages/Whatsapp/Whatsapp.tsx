import React from 'react';

import styles from './Whatsapp.module.scss';

import { ChatRoom } from '../../components/ChatRoom';
import { Sidebar } from '../../components/Sidebar';

import { useUserSocket } from '../../hooks';

export const Whatsapp = () => {
  const { users } = useUserSocket();

  console.log(users);

  return (
    <div className={styles.whatsapp}>
      <div className={styles.whatsapp__sidebar}>
        <Sidebar />
      </div>
      <div className={styles.whatsapp__chat}>
        <ChatRoom />
      </div>
    </div>
  );
};
