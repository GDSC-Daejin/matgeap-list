import { userLocationStore } from '@store/userLocationStore';
import { useAtom } from 'jotai';

export const useGetCurrentLocation = () => {
  const [currentLocation, setState] = useAtom(userLocationStore);
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition((position) => {
        setState((prev) => ({
          ...prev,
          center: {
            lat: position.coords.latitude, // 위도
            lng: position.coords.longitude, // 경도
          },
          errMsg: null,
          isLoading: false,
        }));
      });
    }
  };
  return { currentLocation, getCurrentLocation };
};
