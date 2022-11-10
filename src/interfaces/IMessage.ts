import { IUser } from './IUser';

export interface IMessage {
  type?: number,
  message: string | IUser,
}