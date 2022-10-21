import { db } from '@src/firebase/firebase';
import { ApplyPlace } from '@type/address';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export const useGetMyPlace = (uid: string | undefined) => {
  const [myPlace, setMyPlace] = useState<unknown>([]);

  useEffect(() => {
    (async () => {
      if (!uid) return;
      if (myPlace) {
        setMyPlace([]);
      }
      const q = query(collection(db, 'matgeaps'), where('uid', '==', uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setMyPlace((prev: any) => [...prev, doc.data()]);
      });
    })();
  }, [uid]);

  return myPlace as ApplyPlace[];
};
