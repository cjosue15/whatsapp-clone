export interface Contact {
  uid: string;
  name: string;
  lastMessage: string;
  lastMessageTime: Date;
  countMessage?: string;
  isReading?: boolean;
  picture?: boolean;
}
