import { atom } from 'jotai';

export type User = {
  accessToken: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
};

export const userLoginStore = atom<User | undefined>(undefined);
