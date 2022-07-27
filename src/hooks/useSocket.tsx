import { useEffect, useState } from 'react';

import { Socket, io } from 'socket.io-client';

export const useSockets = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  console.log(socket);

  useEffect(() => {
    const socketTemp = io('http://localhost:4000');

    if (!socket) {
      setSocket(socketTemp);
    }

    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  return { socket };
};
