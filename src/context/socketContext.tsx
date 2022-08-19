import { createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { SessionEvents } from '../socket/events/session';

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

  useEffect(() => {
    const socketTemp = io('http://localhost:4000', { autoConnect: false });

    socket?.on(SessionEvents.SESSION, ({ session }) => {
      localStorage.setItem(SessionEvents.SESSION, JSON.stringify(session));
    });

    if (!socket) {
      setSocket(socketTemp);
    }

    let session = localStorage.getItem(SessionEvents.SESSION);

    if (session && socket) {
      const sessionToSocket = JSON.parse(session);
      console.log(sessionToSocket);
      // setSocket({...socket,auth:{...sessionToSocket}})
      socket.auth = { ...sessionToSocket };
      // setTimeout(() => {
      // }, 2000);
      console.log('connected');
      socket?.connect();
    }

    return () => {
      console.log('asdasdadadas');
      // socket?.disconnect();
    };
  }, [socket]);

  return <SocketStore.Provider value={{ socket }}>{children}</SocketStore.Provider>;
}
