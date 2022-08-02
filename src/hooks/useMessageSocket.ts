import { useEffect, useState } from 'react';
import { IMessage, IMessageFrom, IMessageTo } from '../models';
import { useSocketStore } from '../context/socketContext';

export const useMessageSocket = () => {
  const { socket } = useSocketStore();
  const [messagesSocket, setMessagesSocket] = useState<IMessage>([]);

  useEffect(() => {
    // if (socket) return;
    console.log('PRIVATE_MESSAGE');
    console.log(socket);
    socket?.on('PRIVATE_MESSAGE', (messageFromOtherPerson: IMessageFrom) => {
      console.log(messageFromOtherPerson);
      console.log(messagesSocket);
      setMessagesSocket([...messagesSocket, messageFromOtherPerson.message]);
    });
  }, [socket, messagesSocket]);

  const sendMessage = (messageToSend: IMessageTo) => {
    socket?.emit('PRIVATE_MESSAGE', {
      ...messageToSend,
    });
  };

  return { messages: messagesSocket, sendMessage };
};
