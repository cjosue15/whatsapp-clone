import { IUser } from './user';

export interface ISession {
  sessionID: string | null;
  user: IUser;
}
