import React, { useState } from 'react';

import style from './ChatInput.module.scss';
import { Send } from '../../Icon';

export const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleMessage = () => {
    if (message.trim()) {
      console.log(message);
    }
  };

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
