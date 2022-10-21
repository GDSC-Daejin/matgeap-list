import { Address } from '@type/address';
import { atom } from 'jotai';

export const selectLocationStore = atom<Address | null>(null);
