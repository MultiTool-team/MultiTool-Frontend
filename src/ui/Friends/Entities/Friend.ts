import { UserStatusType } from "./UserStatus";

export interface Friend {
  id: string;
  username: string;
  avatar: string;
  status: UserStatusType;
  lastMessage?: string;
  unreadMessages: number;
  lastOnline?: Date;
};
