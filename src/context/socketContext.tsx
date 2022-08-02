import { createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export interface ISocketStore {
  socket: Socket | null;
}

const SocketStore = createContext<ISocketStore>({ socket: null });

export function useSocketStore() {
  return useContext(SocketStore);
}

interface SocketStoreProps {
  children: React.ReactNode;
}

export function SocketStoreProvider({ children }: SocketStoreProps) {
  const [socket, setSocket] = useState<Socket | null>(null);

  console.log(socket);

  useEffect(() => {
    const socketTemp = io('http://localhost:4000', { autoConnect: false });

    if (!socket) {
      setSocket(socketTemp);
    }

    return () => {
      socket?.disconnect();
    };
  }, [socket]);

  return <SocketStore.Provider value={{ socket }}>{children}</SocketStore.Provider>;
}
