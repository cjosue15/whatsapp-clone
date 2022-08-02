import React, { useState } from 'react';

import style from './ChatInput.module.scss';
import { Send } from '../../Icon';
import { useMessageSocket } from '../../../hooks';
import { useSocketStore, useCurrentUser } from '../../../context';

export const ChatInput = () => {
  const [message, setMessage] = useState('');

  // const { socket } = useSocketStore();
  const { selectedUser } = useCurrentUser();

  const { sendMessage, messages } = useMessageSocket();

  const handleMessage = () => {
    if (message.trim()) {
      console.log(message);
      if (selectedUser)
        sendMessage({
          message,
          to: selectedUser.id,
        });
    }
  };

  console.log(messages);
  return (
    <footer className={style.chatIput}>
      <input
        type='text'
        placeholder='Write a message here...'
        onChange={({ target: { value } }) => setMessage(value.trim())}
        onKeyPress={(event) => event.key === 'Enter' && handleMessage()}
      />
      <button onClick={handleMessage}>
        <Send />
      </button>
    </footer>
  );
};
