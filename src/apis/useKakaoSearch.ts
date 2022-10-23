import { useState } from 'react';

import { useAtom } from 'jotai';

import { alertStore } from '@store/alertStore';
import { addressListStore } from '@store/searchResultsStore';
import { Address } from '@type/address';

export const useKakaoSearch = (map: kakao.maps.Map | null) => {
  const [markers, setMarkers] = useState<Address[]>([]);
  const [, setSearchResults] = useAtom(addressListStore);
  const [, setAlert] = useAtom(alertStore);

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
        if (status === kakao.maps.services.Status.ZERO_RESULT) {
          setAlert({
            isActive: true,
            message: '검색결과가 없어요',
            status: 'WARNING',
          });
        }
      },
      {
        location: center,
      },
    );
  };

  return { markers, searchPlaces };
};
