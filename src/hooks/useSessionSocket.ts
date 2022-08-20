import { useEffect, useState } from 'react';
import { ISession, IUser } from '../models';
import { useSocketStore } from '../context/socketContext';
import { UserEvents } from '../socket/events/user';
import { SessionEvents } from '../socket/events';

export const useSessionSocket = () => {
  // const { socket } = useSocket();
  const { socket } = useSocketStore();
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [currentSession, setCurrentSession] = useState<ISession | null>(null);

  useEffect(() => {
    socket?.on(SessionEvents.GET_SESSIONS, (sessionsFromSocket: ISession[]) => {
      console.log(currentSession);
      const sessions = sessionsFromSocket.filter((session) => session.sessionID !== currentSession?.sessionID);
      console.log(sessions);
      setSessions([...sessions]);
    });
  }, [socket, currentSession]);

  const addSession = (user: IUser) => {
    if (socket) {
      const newSession: ISession = {
        sessionID: null,
        user,
      };

      socket.auth = { ...newSession };
      socket.connect();
      socket.emit(UserEvents.ADD_USER, { ...newSession });
    }
  };

  return { sessions, addSession, currentSession, setCurrentSession };
};
