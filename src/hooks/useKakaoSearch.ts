import { addressListStore } from '@store/searchResultsStore';
import { Address } from '@type/address';
import { useAtom } from 'jotai';
import { useState } from 'react';

export const useKakaoSearch = (map: kakao.maps.Map | null) => {
  const [markers, setMarkers] = useState<Address[]>([]);
  const [, setSearchResults] = useAtom(addressListStore);

  const ps = new kakao.maps.services.Places();

  //카카오 맵 타입 오류로 any 사용
  const searchPlaces = (search: string, center: any) => {
    setSearchResults(null);
    ps.keywordSearch(
      search,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // @ts-ignore
          setSearchResults(data);
          // @ts-ignore
          setMarkers(data);
        }
      },
      {
        location: center,
      },
    );
  };

  return { markers, searchPlaces };
};
