import { atom } from 'jotai';

import { ApplyPlace } from '@type/address';

export const addressListStore = atom<ApplyPlace[] | null>(null);
