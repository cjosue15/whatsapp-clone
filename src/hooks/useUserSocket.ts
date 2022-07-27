import { useEffect, useState } from 'react';
import { useSockets } from './';

export const useUserSocket = () => {
  const { socket } = useSockets();
  const [users, setusers] = useState<any[]>([]);

  // useEffect(() => {
  //   socket?.on('USERS', (args) => {
  //     console.log(...args);
  //   });

  //   // return () => {
  //   //   second;
  //   // };
  // }, [socket]);

  return { users };
};
