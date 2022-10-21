import { Address } from '@type/address';
import { atom } from 'jotai';

export const selectPlaceStore = atom<Address | null>(null);
