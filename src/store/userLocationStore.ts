import { atom } from 'jotai';

export type State = {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: string | null;
  isLoading: boolean;
};

export const userLocationStore = atom<State | null>(null);

export const mapCenterLocationStore = atom((get) => {
  const userLocation = get(userLocationStore);
  if (userLocation) {
    return userLocation.center;
  }
  return { lat: 37.566826, lng: 126.9786567 };
});
