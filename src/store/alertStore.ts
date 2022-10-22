import { atom } from 'jotai';

export interface IAlertState {
  isActive: boolean;
  message: string;
  status: 'WARNING' | 'SUCCESS' | 'ERROR';
}

const defaultAlertState: IAlertState = {
  isActive: false,
  message: 'Test Alert',
  status: 'SUCCESS',
};

export const alertStore = atom(defaultAlertState);
