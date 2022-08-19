import { useEffect, useState } from 'react';
import { IUser } from '../models';
import { useSocketStore } from '../context/socketContext';
import { UserEvents } from '../socket/events/user';

export const useUserSocket = () => {
  // const { socket } = useSocket();
  const { socket } = useSocketStore();
  const [users, setusers] = useState<IUser[]>([]);

  useEffect(() => {
    socket?.on(UserEvents.GET_USER, (usersFromSocket) => {
      setusers([...usersFromSocket]);
    });
  }, [socket]);

  const addUser = (user: IUser) => {
    if (socket) {
      console.log('socket ids', socket.id);
      socket.auth = { user, id: socket.id };
      // socket.connect();
      console.log(socket.id);
      socket.emit(UserEvents.ADD_USER, { ...user, id: socket.id });
    }
  };

  return { users, addUser };
};
