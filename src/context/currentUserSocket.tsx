import { createContext, useContext, useState } from 'react';
import { IUser } from '../models/user';

export interface ICurrentUser {
  selectedUser: IUser | null;
  setSelectedUser: Function;
}

const CurrentUser = createContext<ICurrentUser>({ selectedUser: null, setSelectedUser: () => {} });

export function useCurrentUser() {
  return useContext(CurrentUser);
}

interface CurrentUserProps {
  children: React.ReactNode;
}

export function CurrentUserProvider({ children }: CurrentUserProps) {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  return <CurrentUser.Provider value={{ selectedUser, setSelectedUser }}>{children}</CurrentUser.Provider>;
}
