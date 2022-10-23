import { db } from '@src/firebase/firebase';
import { ApplyPlace } from '@type/address';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useGetPlaceDetail = (placeId: string | undefined) => {
  const [place, setMyPlace] = useState<unknown>();

  useEffect(() => {
    (async () => {
      if (!placeId) return;
      if (place) {
        setMyPlace(null);
      }
      const q = query(collection(db, 'matgeaps'), where('id', '==', placeId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setMyPlace(doc.data());
      });
    })();
  }, [placeId]);

  return place as ApplyPlace;
};
