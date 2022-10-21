import { Address } from '@type/address';
import { atom } from 'jotai';

export const addressListStore = atom<Address[] | null>(null);
