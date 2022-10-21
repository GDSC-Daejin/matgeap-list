import { addressListStore } from '@store/searchResultsStore';
import { Address } from '@type/address';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

export const useKakaoSearch = (search: string | null) => {
  const [markers, setMarkers] = useState<Address[]>([]);
  const [, setSearchResults] = useAtom(addressListStore);
  const [extendBounds, setExtendBounds] = useState<kakao.maps.LatLng>();

  const ps = new kakao.maps.services.Places();

  useEffect(() => {
    if (!search) return;
    ps.keywordSearch(search, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          setExtendBounds(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // @ts-ignore
        setSearchResults(data);
        // @ts-ignore
        setMarkers(data);
      }
    });
  }, [search]);
  return { markers, extendBounds };
};
