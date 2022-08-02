import React from 'react';

import styles from './Whatsapp.module.scss';

import { ChatRoom } from '../../components/ChatRoom';
import { Sidebar } from '../../components/Sidebar';
import { useCurrentUser } from '../../context';

export const Whatsapp = () => {
  const { selectedUser } = useCurrentUser();

  return (
    <div className={styles.whatsapp}>
      <div className={styles.whatsapp__sidebar}>
        <Sidebar />
      </div>
      {selectedUser && (
        <div className={styles.whatsapp__chat}>
          <ChatRoom />
        </div>
      )}
    </div>
  );
};
